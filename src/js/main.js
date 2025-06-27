document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('bg-music');
  const landingModal = document.getElementById('landing-modal');
  const cancelModal = document.getElementById('cancel-modal');
  const mainContent = document.getElementById('main-content');
  const proceedBtn = document.getElementById('proceedBtn');
  const backBtn = document.getElementById('backBtn');
  const signInModal = document.getElementById('sign-in-modal');
  const signInInput = document.getElementById('sign-in-input');
  const signInBtn = document.getElementById('sign-in-btn');
  const signInError = document.getElementById('sign-in-error');
  const loadingSpinner = document.getElementById('loading-spinner');
  const msg1Modal = document.getElementById('msg-1');
  const messageCounter = document.getElementById('message-counter');
  const audioControls = document.getElementById('audio-controls');
  const muteUnmuteBtn = document.getElementById('mute-unmute-btn');
  const volumeSlider = document.getElementById('volume-slider');
  const volumeIcon = document.getElementById('volume-icon');
  const firstMsgBtn = document.getElementById('firstMsgBtn');
  const lastMsgBtn = document.getElementById('lastMsgBtn');

  // Audio playlist
  const audioFiles = [
    'src/audio/bgm.mp3',
    'src/audio/bgm2.mp3',
    'src/audio/bgm3.mp3'
  ];
  let currentAudioIndex = 0;

  // Show initial modal with transition
  setTimeout(() => {
    signInModal.classList.add('show');
  }, 100);

  if (proceedBtn) {
    proceedBtn.onclick = function() {
      landingModal.classList.remove('show');
      setTimeout(() => {
        landingModal.style.display = 'none';
        msg1Modal.classList.add('show');
        audio.volume = 0.7;
        audio.src = audioFiles[currentAudioIndex]; // Set initial audio source
        audio.play().catch(() => {});
        audioControls.classList.remove('hidden');
        messageCounter.classList.remove('hidden');
        volumeSlider.value = audio.volume;
        updateVolumeIcon();
        typeWriterHeader();
      }, 300);
    };
  }

  // Audio playlist looping
  audio.addEventListener('ended', () => {
    currentAudioIndex = (currentAudioIndex + 1) % audioFiles.length;
    audio.src = audioFiles[currentAudioIndex];
    audio.load(); // Explicitly load the new audio source
    audio.play().catch(() => {
      // Optionally, handle or log the error if playback still fails
      console.error("Audio playback failed after load.", audio.src);
    });
  });

  if (document.getElementById('cancelBtn')) {
    document.getElementById('cancelBtn').onclick = function() {
      landingModal.classList.remove('show');
      setTimeout(() => {
        landingModal.style.display = 'none';
        mainContent.style.filter = 'blur(2px)';
        cancelModal.style.display = 'flex';
        cancelModal.classList.add('show');
      }, 300);
    };
  }

  if (backBtn) {
    backBtn.onclick = function() {
      cancelModal.classList.remove('show');
      setTimeout(() => {
        cancelModal.style.display = 'none';
        mainContent.style.filter = '';
        landingModal.style.display = 'flex';
        landingModal.classList.add('show');
      }, 300);
    };
  }

  if (signInBtn) {
    signInBtn.onclick = async function() {
      const hashedInput = "a553c8dc7ec47458d254a4dab2062ce2e6236359e8059f190c8bc6f60ec5153e";
      const userInput = signInInput.value;
      const hashedUserInput = await hashFunction(userInput);

      if (hashedUserInput === hashedInput) {
        signInModal.classList.remove('show');
        setTimeout(() => {
          signInModal.style.display = 'none';
          loadingSpinner.style.display = 'flex';
          loadingSpinner.classList.add('show');
          setTimeout(() => {
            loadingSpinner.classList.remove('show');
            setTimeout(() => {
              loadingSpinner.style.display = 'none';
              landingModal.style.display = 'flex';
              landingModal.classList.add('show');
            }, 300);
          }, 3000);
        }, 300);
      } else {
        signInError.classList.remove('hidden');
        signInInput.value = '';
        signInInput.classList.add('ring-2', 'ring-red-500');
        setTimeout(() => {
          signInError.classList.add('hidden');
          signInInput.classList.remove('ring-2', 'ring-red-500');
        }, 3000);
      }
    };
  }

  // Twinkling stars logic
  const twinkleBg = document.getElementById('twinkle-bg');
  const STAR_COUNT = 40;
  const STAR_COLORS = ['#fff', '#a5b4fc', '#f0abfc', '#f9a8d4'];
  
  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement('div');
    star.className = 'twinkle-star';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    const size = Math.random() * 4 + 2;
    star.style.width = star.style.height = size + 'px';
    star.style.background = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
    star.style.animationDelay = (Math.random() * 6) + 's';
    twinkleBg.appendChild(star);
  }

  // Message content
  const messages = [
    "Yudiiiiii graduate na sa kuno HAHAHAHAHAHHAHAHA",
    "I am genuinely proud gid ya para sa imo as your friend!!!! Nakita ko gid kung pano ka magbakas (lalo na sa aton capstone HAHAHAHAHAHAHA)",
    "Gusto ko lang ihambal nga na appreciate ko gid ang imo effort sa pag ubra sang papers naton, sa mga pagpulaw mo, kag sa mga time nga nastress ka ubra, for sure wala gid nasayang ang imo efforts kag pagpangabudlay kay as you can see, graduate na ta yeeeyyyyyy",
    "Mamiss ka gid nakon frfr kay isa ka gid sa gin turing ko nga genuine friend ko gid ya 🥺🥹",
    "Sorry gid kung masyado ko kasabad kag gamo gamo sa chat kis-a (indi lang kis-a, laban gid ya HAHAHAHAHAHA)",
    "Daw sa imo ko lang gid bi nafeel nga comfortable gid ko as in so sinawo mo gid tanan tanan HAHAHAHAHAHAHAHAH sorry gid ya wealyyyyyyn 😭🙏🏻",
    "Sobra gid ko ka thankful kay naging part ka sang akon college life (although 3rd year na ta naging close nga duwa, which naga regret gid ko ya kay way ta ka ngadaan gin befriend 🥹)",
    "HALAAAAA ANO INI ANG GATULO SAKON CHURA!! GAGI GAULAN SA SULOD SANG KWARTO YA",
    "You might not know this, pero aside kay kezia, mahambal ko gid nga naapektuhan mo gid akon personality (positively). I can confidently say nga mas naging 'positive' ko umpisa sang nag upod ko simo. Kung wala na natabo, panigurado nega man ko gyapon asta yanda",
    "Umpisa sang naging friends ta, amat amat naglain ang akon view sa life, like napanumdom ko nga why not e enjoy nalang ang nabilin ko nga time sa college kay manog graduate naman ko",
    "Mina nga kung may mga event or kung nano, naga attend nalang ko kay I want to make memories upod ka kay feel ko ulhi na gid ta nga duwa naging close",
    "Gagiiii gatalisik di sakon kwarto ya. Sirado man gani ang bintana kag HAHAHAHAHAHAHA",
    "OKAYYY TAMA NA NA, BASI MAGWAWAW KO DI KARON ISA LANG KO SA KWARTO HAHAHAHAHAHAHAHHA",
    "May ihambal pako tani tungkol sa inyo ni twin kaso baka magka-unauthorized access tong message at mabasahan ng iba HAHAHAHAHAHA. Basta bal-an mo naman na akon nahambal pirmi HAHAHAHAHAHAHA, e wish ko lang kamo di nga duwa pirmi 😁✨",
    "I genuinely hope and want to see you succeed in life!!!",
    "Grabi ari na ta sa next page sang aton kabuhi. Mini gid ang ginatawag nila nga real world. Tas pareho pa ta nga duwa wala kabalo kung ano aton himuon HAHAHAHAHAHAHA",
    "Kung ano man ang aton magiging next nga decision, tani magiging positive ang impact sina sa aton life, kag tani ipalayo lang ta sa hardships kag failure",
    "Sa liwat, big congratulations sa imo WEAAALYYYN!!!! 🎓🎉💖",
    "I wish you a successful journey in your adult life!! ",
    "P.S. Tani nagustohan mo akon small token of appreciation para simo HAHAHAHAHAHAHAHAHA"
  ];

  // Audio controls functionality
  let isMuted = false;
  muteUnmuteBtn.onclick = function() {
    if (audio.muted) {
      audio.muted = false;
      isMuted = false;
      audio.volume = volumeSlider.value;
    } else {
      audio.muted = true;
      isMuted = true;
    }
    updateVolumeIcon();
  };

  volumeSlider.oninput = function() {
    audio.volume = volumeSlider.value;
    audio.muted = false;
    isMuted = false;
    updateVolumeIcon();
  };

  function updateVolumeIcon() {
    // Lucide Icons inspired paths
    const speakerBase = 'M11 5L6 9H2V15H6L11 19V5Z';

    if (audio.muted || audio.volume === 0) {
      // Muted: Speaker base + cross
      volumeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="${speakerBase}M22 9L16 15 M16 9L22 15" />`;
    } else if (audio.volume < 0.5) {
      // Low volume: Speaker base + one wave
      volumeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="${speakerBase}M15.54 8.46a5 5 0 010 7.07" />`;
    } else {
      // Full volume: Speaker base + two waves
      volumeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" d="${speakerBase}M15.54 8.46a5 5 0 010 7.07 M19.07 4.93a10 10 0 010 14.14" />`;
    }
  }

  // Typewriter effect for header
  const typewriterHeader = document.getElementById('typewriter-header');
  const headerText = "Congratulations, WEALYYYYYYYYN!";
  let twHeaderIndex = 0;

  function typeWriterHeader() {
    if (twHeaderIndex <= headerText.length) {
      typewriterHeader.textContent = headerText.slice(0, twHeaderIndex);
      twHeaderIndex++;
      setTimeout(typeWriterHeader, 50);
    } else {
      // Trigger confetti when header typing is complete
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      displayMessage(currentTextIndex);
    }
  }

  // Typewriter effect for messages with smooth transitions
  const typewriterMsg = document.getElementById('typewriter-msg');
  let twMsgIndex = 0;
  let currentTextIndex = 0;
  let typingComplete = false;
  let messageDisplayTimeout;
  const body = document.body; // Get the body element
  const backgroundClasses = [
    'bg-gradient-pink-blue',
    'bg-gradient-purple-green',
    'bg-gradient-yellow-orange',
    'bg-gradient-teal-lime'
  ];

  function updateMessageCounter() {
    messageCounter.textContent = `Message ${currentTextIndex + 1}/${messages.length}`;
  }

  function displayMessage(index) {
    clearTimeout(messageDisplayTimeout);
    currentTextIndex = index;
    typingComplete = false;
    twMsgIndex = 0;
    updateMessageCounter();

    // Change background based on message index
    body.className = body.className.split(' ').filter(c => !c.startsWith('bg-gradient')).join(' ');
    body.classList.add(backgroundClasses[currentTextIndex % backgroundClasses.length]);

    // Fade out current message
    typewriterMsg.style.opacity = '0';
    typewriterMsg.style.transition = 'opacity 0.5s ease-out';

    setTimeout(() => {
      typewriterMsg.textContent = ''; // Clear content after fade out
      typewriterMsg.style.transition = ''; // Remove transition for instant content change

      function type() {
        if (twMsgIndex <= messages[currentTextIndex].length) {
          typewriterMsg.textContent = messages[currentTextIndex].slice(0, twMsgIndex);
          twMsgIndex++;
          messageDisplayTimeout = setTimeout(type, 1);
        } else {
          typingComplete = true;
          document.getElementById('message-navigation').classList.remove('hidden');
        }
      }

      // Fade in new message
      typewriterMsg.style.opacity = '1';
      typewriterMsg.style.transition = 'opacity 0.5s ease-in';
      type();
    }, 500); // Wait for fade out to complete
  }

  // Navigation buttons
  document.getElementById('nextMsgBtn').onclick = function() {
    if (typingComplete && currentTextIndex + 1 < messages.length) {
      displayMessage(currentTextIndex + 1);
      this.classList.add('ripple-active');
      setTimeout(() => {
        this.classList.remove('ripple-active');
      }, 600); // Match CSS transition duration
    }
  };

  document.getElementById('prevMsgBtn').onclick = function() {
    if (currentTextIndex > 0) {
      displayMessage(currentTextIndex - 1);
      this.classList.add('ripple-active');
      setTimeout(() => {
        this.classList.remove('ripple-active');
      }, 600); // Match CSS transition duration
    }
  };

  if (firstMsgBtn) {
    firstMsgBtn.onclick = function() {
      displayMessage(0);
      this.classList.add('ripple-active');
      setTimeout(() => {
        this.classList.remove('ripple-active');
      }, 600); // Match CSS transition duration
    };
  }

  if (lastMsgBtn) {
    lastMsgBtn.onclick = function() {
      displayMessage(messages.length - 1);
      this.classList.add('ripple-active');
      setTimeout(() => {
        this.classList.remove('ripple-active');
      }, 600); // Match CSS transition duration
    };
  }
});

function hashFunction(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  return crypto.subtle.digest('SHA-256', data).then(hashBuffer => {
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  });
}