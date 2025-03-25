class Portfolio {
    constructor() {
      this.projects = document.querySelectorAll('.project');
      this.initHoverEffects();
      this.preloadVideos();
    }
  
    initHoverEffects() {
      this.projects.forEach(project => {
        const video = project.querySelector('video');
        const img = project.querySelector('.preview');
        
        project.addEventListener('mouseenter', () => {
          video.style.opacity = 1;
          video.play();
          img.style.opacity = 0;
        });
        
        project.addEventListener('mouseleave', () => {
          video.style.opacity = 0;
          video.pause();
          img.style.opacity = 1;
        });
      });
    }
  
    preloadVideos() {
      // Pré-carrega os primeiros 3 frames de cada vídeo
      document.querySelectorAll('video').forEach(video => {
        video.currentTime = 1;
      });
    }
  }
  
  new Portfolio();
  