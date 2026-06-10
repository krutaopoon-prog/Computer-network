/* Interactive Topology Demo */

const COLORS = {
    bus:  '#8b5cf6',
    ring: '#ec4899',
    star: '#f59e0b',
    mesh: '#06b6d4',
    node: '#1e293b',
    nodeFill: '#f8fafc',
    link: '#94a3b8',
    packet: '#ef4444',
    active: '#22c55e',
};

class TopologyDemo {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.current = 'star';
        this.animFrame = null;
        this.packet = null;
        this.pathIndex = 0;
        this.pathT = 0;
        this.animating = false;

        this.resize();
        window.addEventListener('resize', () => this.resize());
        this.draw();
    }

    resize() {
        const w = this.canvas.parentElement.clientWidth - 40;
        this.canvas.width  = Math.min(w, 700);
        this.canvas.height = Math.round(this.canvas.width * 0.52);
        this.draw();
    }

    /* ---- layout calculators ---- */
    getNodes() {
        const W = this.canvas.width, H = this.canvas.height;
        const cx = W / 2, cy = H / 2;
        const r  = Math.min(W, H) * 0.35;

        if (this.current === 'bus') {
            const n = 6, y = cy, xs = W * 0.12;
            const step = (W - xs * 2) / (n - 1);
            return Array.from({length: n}, (_, i) => ({x: xs + i * step, y}));
        }
        if (this.current === 'ring' || this.current === 'mesh') {
            const n = 6;
            return Array.from({length: n}, (_, i) => {
                const a = (i / n) * Math.PI * 2 - Math.PI / 2;
                return {x: cx + r * Math.cos(a), y: cy + r * Math.sin(a)};
            });
        }
        if (this.current === 'star') {
            const leaves = 5, lr = r * 0.95;
            const pts = [{x: cx, y: cy}];
            for (let i = 0; i < leaves; i++) {
                const a = (i / leaves) * Math.PI * 2 - Math.PI / 2;
                pts.push({x: cx + lr * Math.cos(a), y: cy + lr * Math.sin(a)});
            }
            return pts;
        }
        return [];
    }

    getLinks(nodes) {
        const n = nodes.length;
        if (this.current === 'bus')  return [];  /* bus uses a spine, not pairwise */
        if (this.current === 'ring') return Array.from({length: n}, (_, i) => [i, (i+1)%n]);
        if (this.current === 'star') return Array.from({length: n-1}, (_, i) => [0, i+1]);
        if (this.current === 'mesh') {
            const links = [];
            for (let i = 0; i < n; i++)
                for (let j = i+1; j < n; j++)
                    links.push([i, j]);
            return links;
        }
        return [];
    }

    /* ---- drawing ---- */
    draw() {
        const ctx = this.ctx, W = this.canvas.width, H = this.canvas.height;
        const color = COLORS[this.current];

        ctx.clearRect(0, 0, W, H);
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, W, H);

        const nodes = this.getNodes();
        const links = this.getLinks(nodes);
        const nr = Math.max(12, W * 0.022);

        /* -- bus spine -- */
        if (this.current === 'bus') {
            const y = H / 2;
            ctx.beginPath();
            ctx.moveTo(nodes[0].x, y);
            ctx.lineTo(nodes[nodes.length-1].x, y);
            ctx.strokeStyle = color;
            ctx.lineWidth = 4;
            ctx.stroke();

            /* terminators */
            [nodes[0].x - 12, nodes[nodes.length-1].x + 12].forEach(x => {
                ctx.fillStyle = '#475569';
                ctx.fillRect(x - 6, y - 10, 8, 20);
            });

            /* drops */
            nodes.forEach(n => {
                ctx.beginPath();
                ctx.moveTo(n.x, y - nr);
                ctx.lineTo(n.x, y);
                ctx.strokeStyle = COLORS.link;
                ctx.lineWidth = 2;
                ctx.stroke();
            });
        }

        /* -- pairwise links -- */
        links.forEach(([a, b]) => {
            ctx.beginPath();
            ctx.moveTo(nodes[a].x, nodes[a].y);
            ctx.lineTo(nodes[b].x, nodes[b].y);
            ctx.strokeStyle = color + '88';
            ctx.lineWidth = 2;
            ctx.stroke();
        });

        /* -- packet path overlay -- */
        if (this.animating && this.packet) {
            const {path} = this.packet;
            for (let i = 0; i < path.length - 1; i++) {
                const a = nodes[path[i]], b = nodes[path[i+1]];
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.strokeStyle = COLORS.active;
                ctx.lineWidth = 3;
                ctx.stroke();
            }
        }

        /* -- nodes -- */
        nodes.forEach((n, i) => {
            const isCenter = this.current === 'star' && i === 0;
            const isActive = this.animating && this.packet &&
                             this.packet.path.includes(i) &&
                             this.packet.path.indexOf(i) <= this.pathIndex;

            /* shadow */
            ctx.shadowColor = isActive ? COLORS.active : 'rgba(0,0,0,0.15)';
            ctx.shadowBlur  = isActive ? 14 : 6;

            ctx.beginPath();
            ctx.arc(n.x, n.y, isCenter ? nr * 1.5 : nr, 0, Math.PI * 2);
            ctx.fillStyle   = isActive ? COLORS.active : (isCenter ? color : COLORS.nodeFill);
            ctx.strokeStyle = isActive ? COLORS.active : color;
            ctx.lineWidth   = 2.5;
            ctx.fill();
            ctx.stroke();
            ctx.shadowBlur = 0;

            /* label */
            ctx.fillStyle = isActive ? 'white' : (isCenter ? 'white' : COLORS.node);
            ctx.font = `bold ${Math.max(10, nr * 0.7)}px Segoe UI`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(isCenter ? 'Hub' : `PC${i}`, n.x, n.y);
        });

        /* -- moving packet dot -- */
        if (this.animating && this.packet && this.pathIndex < this.packet.path.length - 1) {
            const a = nodes[this.packet.path[this.pathIndex]];
            const b = nodes[this.packet.path[this.pathIndex + 1]];
            const t = this.pathT;
            const px = a.x + (b.x - a.x) * t;
            const py = a.y + (b.y - a.y) * t;
            ctx.beginPath();
            ctx.arc(px, py, nr * 0.55, 0, Math.PI * 2);
            ctx.fillStyle = COLORS.packet;
            ctx.shadowColor = COLORS.packet;
            ctx.shadowBlur = 12;
            ctx.fill();
            ctx.shadowBlur = 0;
        }

        /* topology label */
        const labels = {bus:'Bus Topology', ring:'Ring Topology', star:'Star Topology', mesh:'Mesh Topology'};
        ctx.font = `bold ${Math.max(13, W * 0.022)}px Segoe UI`;
        ctx.fillStyle = color;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'top';
        ctx.fillText(labels[this.current], 12, 12);
    }

    /* ---- animation ---- */
    startAnimation() {
        if (this.animating) return;
        const nodes = this.getNodes();
        const n = nodes.length;

        let path;
        if (this.current === 'bus')  path = [0, 1, 2, 3, 4, 5];
        if (this.current === 'ring') path = [0, 1, 2, 3, 4, 5, 0];
        if (this.current === 'star') path = [1, 0, 3];
        if (this.current === 'mesh') path = [0, 3, 5, 1];

        this.packet    = {path};
        this.pathIndex = 0;
        this.pathT     = 0;
        this.animating = true;
        this._animate();
    }

    _animate() {
        if (!this.animating) return;
        this.pathT += 0.04;
        if (this.pathT >= 1) {
            this.pathT = 0;
            this.pathIndex++;
            if (this.pathIndex >= this.packet.path.length - 1) {
                this.animating = false;
                this.packet    = null;
                this.draw();
                return;
            }
        }
        this.draw();
        this.animFrame = requestAnimationFrame(() => this._animate());
    }

    setTopology(type) {
        cancelAnimationFrame(this.animFrame);
        this.animating = false;
        this.packet    = null;
        this.current   = type;
        this.draw();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const demo = new TopologyDemo('demo-canvas');

    document.querySelectorAll('.demo-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.demo-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            demo.setTopology(btn.dataset.topo);
        });
    });

    document.getElementById('btn-animate').addEventListener('click', () => {
        demo.startAnimation();
    });

    /* default active */
    document.querySelector('.demo-btn[data-topo="star"]').classList.add('active');
});
