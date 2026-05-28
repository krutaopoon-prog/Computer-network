// Network Zombie Quiz Game - Core Logic

class ZombieQuizGame {
    constructor() {
        this.score = 0;
        this.highScore = this.loadHighScore();
        this.questions = [...QUESTIONS]; // Copy questions array
        this.usedQuestions = [];
        this.currentQuestion = null;
        this.timer = null;
        this.timeLeft = 10;
        this.baseTime = 10;
        this.minTime = 3;
        this.isPlaying = false;
        this.zombiePosition = 70; // Percentage from right (starts at 70%, moves towards player at 15%)
        this.playerPosition = 15; // Player is at 15% from left
        this.dangerZone = 25; // When zombie reaches 25% from right, game over
        
        this.initElements();
        this.bindEvents();
        this.updateHighScoreDisplay();
    }

    initElements() {
        // Screens
        this.startScreen = document.getElementById('start-screen');
        this.gameScreen = document.getElementById('game-screen');
        this.gameOverScreen = document.getElementById('game-over-screen');
        
        // Game elements
        this.questionText = document.getElementById('question-text');
        this.option1Btn = document.getElementById('option-1');
        this.option2Btn = document.getElementById('option-2');
        this.timerBar = document.getElementById('timer-bar');
        this.timerText = document.getElementById('timer-text');
        this.scoreDisplay = document.getElementById('score-display');
        this.highScoreDisplay = document.getElementById('high-score-display');
        this.finalScoreDisplay = document.getElementById('final-score');
        this.zombie = document.getElementById('zombie');
        this.player = document.getElementById('player');
        this.zombieContainer = document.getElementById('zombie-container');
        
        // Buttons
        this.startBtn = document.getElementById('start-btn');
        this.restartBtn = document.getElementById('restart-btn');
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.restartBtn.addEventListener('click', () => this.startGame());
        
        this.option1Btn.addEventListener('click', () => this.answer(0));
        this.option2Btn.addEventListener('click', () => this.answer(1));
        
        // Keyboard support
        document.addEventListener('keydown', (e) => {
            if (!this.isPlaying) return;
            if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
                this.answer(0);
            } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
                this.answer(1);
            }
        });
    }

    loadHighScore() {
        const saved = localStorage.getItem('zombieQuizHighScore');
        return saved ? parseInt(saved) : 0;
    }

    saveHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('zombieQuizHighScore', this.highScore);
            this.updateHighScoreDisplay();
        }
    }

    updateHighScoreDisplay() {
        this.highScoreDisplay.textContent = `High Score: ${this.highScore}`;
    }

    startGame() {
        this.score = 0;
        this.questions = [...QUESTIONS];
        this.usedQuestions = [];
        this.isPlaying = true;
        this.zombiePosition = 100;
        
        this.updateScore();
        this.showScreen('game');
        this.nextQuestion();
    }

    showScreen(screen) {
        this.startScreen.classList.remove('active');
        this.gameScreen.classList.remove('active');
        this.gameOverScreen.classList.remove('active');
        
        if (screen === 'start') this.startScreen.classList.add('active');
        else if (screen === 'game') this.gameScreen.classList.add('active');
        else if (screen === 'gameover') this.gameOverScreen.classList.add('active');
    }

    getNextQuestion() {
        // If all questions used, reset
        if (this.questions.length === 0) {
            this.questions = [...this.usedQuestions];
            this.usedQuestions = [];
        }
        
        // Random question
        const index = Math.floor(Math.random() * this.questions.length);
        const question = this.questions.splice(index, 1)[0];
        this.usedQuestions.push(question);
        
        return question;
    }

    nextQuestion() {
        this.currentQuestion = this.getNextQuestion();
        
        // Update UI
        this.questionText.textContent = this.currentQuestion.question;
        this.option1Btn.textContent = this.currentQuestion.options[0];
        this.option2Btn.textContent = this.currentQuestion.options[1];
        
        // Reset zombie position (starts at right side)
        this.zombiePosition = 70;
        this.zombie.classList.remove('moving');
        this.updateZombiePosition();
        
        // Calculate time based on score (get harder)
        const timeReduction = Math.floor(this.score / 10);
        this.timeLeft = Math.max(this.minTime, this.baseTime - timeReduction);
        
        this.startTimer();
    }

    startTimer() {
        if (this.timer) clearInterval(this.timer);
        
        const maxTime = this.timeLeft;
        let currentTime = this.timeLeft;
        
        // Start zombie walking animation
        this.zombie.classList.add('moving');
        
        this.timer = setInterval(() => {
            currentTime -= 0.1;
            
            // Update timer bar
            const percentage = (currentTime / maxTime) * 100;
            this.timerBar.style.width = `${percentage}%`;
            this.timerText.textContent = Math.ceil(currentTime);
            
            // Change color based on time
            if (percentage > 50) {
                this.timerBar.style.background = '#10b981';
            } else if (percentage > 25) {
                this.timerBar.style.background = '#f59e0b';
            } else {
                this.timerBar.style.background = '#ef4444';
                // Shake effect when low time
                if (Math.floor(currentTime * 10) % 5 === 0) {
                    this.zombieContainer.classList.add('shake');
                    setTimeout(() => this.zombieContainer.classList.remove('shake'), 100);
                }
            }
            
            // Move zombie from right to left (towards player)
            // Starts at 70% from right, moves towards player at 15%
            const progress = (maxTime - currentTime) / maxTime;
            this.zombiePosition = 70 - (progress * 50); // Moves from 70% to 20%
            this.updateZombiePosition();
            
            // Check if zombie reached player
            if (this.zombiePosition <= this.dangerZone) {
                this.player.classList.add('attacked');
                this.gameOver('zombie-attack');
            }
            
            if (currentTime <= 0) {
                this.gameOver('timeout');
            }
        }, 100);
    }

    updateZombiePosition() {
        // Position from right (zombie moves from right towards player)
        this.zombie.style.right = `${this.zombiePosition}%`;
    }

    answer(selectedIndex) {
        if (!this.isPlaying) return;
        
        clearInterval(this.timer);
        this.zombie.classList.remove('moving');
        
        if (selectedIndex === this.currentQuestion.correct) {
            // Correct answer - Player shoots zombie
            this.score++;
            this.updateScore();
            
            // Player shooting animation
            this.player.classList.add('shooting');
            
            // Zombie death animation
            setTimeout(() => {
                this.zombie.classList.add('zombie-dead');
            }, 200);
            
            // Button feedback
            const correctBtn = selectedIndex === 0 ? this.option1Btn : this.option2Btn;
            correctBtn.classList.add('correct');
            
            setTimeout(() => {
                this.player.classList.remove('shooting');
                this.zombie.classList.remove('zombie-dead');
                correctBtn.classList.remove('correct');
                this.nextQuestion();
            }, 800);
        } else {
            // Wrong answer - Zombie attacks player
            const wrongBtn = selectedIndex === 0 ? this.option1Btn : this.option2Btn;
            const correctBtn = this.currentQuestion.correct === 0 ? this.option1Btn : this.option2Btn;
            
            wrongBtn.classList.add('wrong');
            correctBtn.classList.add('correct');
            
            // Zombie attacks player animation
            this.zombie.style.transition = 'right 0.5s ease';
            this.zombie.style.right = '15%';
            
            setTimeout(() => {
                this.player.classList.add('attacked');
            }, 400);
            
            setTimeout(() => {
                wrongBtn.classList.remove('wrong');
                correctBtn.classList.remove('correct');
                this.gameOver('wrong');
            }, 800);
        }
    }

    updateScore() {
        this.scoreDisplay.textContent = `Score: ${this.score}`;
    }

    gameOver(reason) {
        this.isPlaying = false;
        clearInterval(this.timer);
        
        this.saveHighScore();
        
        // Update game over screen
        this.finalScoreDisplay.textContent = this.score;
        
        const reasonText = document.getElementById('game-over-reason');
        if (reason === 'timeout') {
            reasonText.textContent = '⏰ หมดเวลา! ซอมบี้เข้ามาถึงตัวแล้ว!';
        } else if (reason === 'zombie-attack') {
            reasonText.textContent = '🧟 ซอมบี้เข้ามาถึงตัวคุณแล้ว! เกมจบ!';
        } else {
            reasonText.textContent = '💀 ตอบผิด! ซอมบี้โจมตีคุณ!';
        }
        
        this.showScreen('gameover');
    }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.game = new ZombieQuizGame();
});
