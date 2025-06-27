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
        audio.play().catch(() => {});
        typeWriterHeader();
      }, 300);
    };
  }

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
      typeWriterMsg();
    }
  }

  // Typewriter effect for messages
  const typewriterMsg = document.getElementById('typewriter-msg');
  let twMsgIndex = 0;
  let currentTextIndex = 0;
  let typingComplete = false;

  function typeWriterMsg() {
    if (currentTextIndex < messages.length) {
      const currentText = messages[currentTextIndex];
      if (twMsgIndex <= currentText.length) {
        typewriterMsg.textContent = currentText.slice(0, twMsgIndex);
        twMsgIndex++;
        setTimeout(typeWriterMsg, 1);
      } else {
        typingComplete = true;
        if (currentTextIndex + 1 < messages.length) {
          document.getElementById('message-navigation').classList.remove('hidden');
        }
      }
    }
  }

  function startBackspace() {
    document.getElementById('message-navigation').classList.add('hidden');
    const currentElementText = typewriterMsg.textContent;
    if (currentElementText.length > 0) {
      typewriterMsg.textContent = currentElementText.slice(0, currentElementText.length - 1);
      setTimeout(startBackspace, 5);
    } else {
      currentTextIndex++;
      twMsgIndex = 0;
      typingComplete = false;
      setTimeout(typeWriterMsg, 40);
    }
  }

  // Navigation buttons
  document.getElementById('nextMsgBtn').onclick = function() {
    if (typingComplete) {
      startBackspace();
    }
  };

  document.getElementById('prevMsgBtn').onclick = function() {
    if (currentTextIndex > 0) {
      currentTextIndex--;
      twMsgIndex = 0;
      typingComplete = false;
      typewriterMsg.textContent = '';
      document.getElementById('message-navigation').classList.add('hidden');
      typeWriterMsg();
    }
  };
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