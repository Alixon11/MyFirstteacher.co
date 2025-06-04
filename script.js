function toggleMenu() {
    document.querySelector(".mobile-menu").classList.toggle("active");
}

document.getElementById('lang-btn').addEventListener('click', function () {
    this.innerText = this.innerText === 'EN' ? 'RU' : 'EN';
});

function closeModal() {
    document.getElementById('modal').classList.remove('show');
}

document.getElementById('openModal').addEventListener('click', function () {
    document.getElementById('modal').classList.add('show');
});


document.getElementById('lang-btn').addEventListener('click', function () {
    let btn = document.getElementById('lang-btn');
    let lang = btn.innerText === 'EN' ? 'RU' : 'EN';

    const translations = {
        EN: {
            home: 'Home', projects: 'Projects', about: 'About', contact: 'Contact',
            back: 'Interior design from sketch to completion',
            bac: 'Interior design for home and business of any complexity. Get a consultation today',
            consultationBtn: 'Get a consultation', txtbtn: 'Get a consultation', txt: 'Leave your contact details and we will contact you.',
            htxt: 'We guarantee precise execution on time',
            jtxt: 'We implement architectural and design projects of any complexity from foundations to textile purchases.',
            stxt: '> Private projects', dtxt: '> horeca', ftxt: '> Architecture projects', gtxt: '> Commerce projects',
            sidetxt: 'How we work', sitxt: 'Stages of work on', sdtxt: 'design creation', setxt: 'interior',
            dotxt: 'Consultation', dostxt: 'We discuss your preferences, style and functional requirements...',
            steptxt: 'Registration of the contract', stetxt: 'After agreeing on the concept, we sign a contract...',
            stttxt: 'Planning development', stestxt: 'We create a functional layout, taking into account ergonomics...',
            sttptxt: 'Design development', sttpptxt: 'At this stage, a design concept is created...',
            dosptxt: '3D visualization', dosdtxt: 'We create realistic 3D interior visualizations...',
            stoptxt: 'Repair and finishing works', stotxt: 'We carry out repair and finishing works according to the created design...',
            ptotxt: 'We provide a full range of services: from foundation to decor',
            soztxt: 'ARCHITECTURE AND CONSTRUCTION', sotxt: 'We are engaged in the design and implementation of architectural projects.',
            sobtxt: 'INTERIOR DESIGN', futtxt: 'We design and implement architectural projects.',
            vizual: "3D VISUALIZATION", vizua: "This is an opportunity to see how the interior will look...",
            online: 'ONLINE REPORT FOR OUR CLIENTS', onlin: 'For transparency, we have developed an online reporting system...',
            login: 'Login to your personal account', 'consultation-btn': "Get consultation", lefttxt: "We guarantee", leftxt: "The best work and we deliver on time",
            righttxt: "We are the best Architectural companies in Tashkent you can trust", btn: "Write to telegram", proj: "Our projects", port: "> in portfolio", mir: "Residential complex 'Ak Saray' in Mirzo Ulugbek district Designed and built by Gorodskoy Stroy LLC. This eight-story building of 11 blocks has become a unique and modern architectural solution. The light facade of the building, elegant decorative elements, carved railings of the balconies of the building give a majestic appearance.",
            mir2: "Residential complex 'Ak Saray' in Mirzo Ulugbek district Designed and built by Gorodskoy Stroy LLC. This eight-story building of 11 blocks has become a unique and modern architectural solution. The light facade of the building, elegant decorative elements, carved railings of the balconies of the building give a majestic appearance.",
            mir3: "Residential complex 'Ak Saray' in Mirzo Ulugbek district Designed and built by Gorodskoy Stroy LLC. This eight-story building of 11 blocks has become a unique and modern architectural solution. The light facade of the building, elegant decorative elements, carved railings of the balconies of the building give a majestic appearance.",
            mir4: "Residential complex 'Ak Saray' in Mirzo Ulugbek district Designed and built by Gorodskoy Stroy LLC. This eight-story building of 11 blocks has become a unique and modern architectural solution. The light facade of the building, elegant decorative elements, carved railings of the balconies of the building give a majestic appearance.",
            mir5: "Residential complex 'Ak Saray' in Mirzo Ulugbek district Designed and built by Gorodskoy Stroy LLC. This eight-story building of 11 blocks has become a unique and modern architectural solution. The light facade of the building, elegant decorative elements, carved railings of the balconies of the building give a majestic appearance.",
            mir6: "Residential complex 'Ak Saray' in Mirzo Ulugbek district Designed and built by Gorodskoy Stroy LLC. This eight-story building of 11 blocks has become a unique and modern architectural solution. The light facade of the building, elegant decorative elements, carved railings of the balconies of the building give a majestic appearance.",
            coptxt: "Contact us", cotxt: "Fill out the form to contact us.", copltxt: "Fill out the form", label: "Name", labe: "Number", la: "Email", l: "Item", le: "Message", sub: "Send Message", copritxt: "Contact us",
            uyt: "Imamov Architects develops innovative, sustainable and timeless architectural solutions. With a passion for creativity and functionality, we transform ideas into reality, delivering high-quality projects that meet our clients' needs.",
            dfg: "About us", dfh: "Our Services", dfk: "Projects", dfa: "Careers", dfq: "Contact", jkl: "Contact us", lkj: "Phone: +998 (95)440-60-60", iop: "Email: info@imamovarchitects.com", ios: "Ozod Street House 21, 100002, Tashkent, Tashkent, Uzbekistan", zxc: "Quick links", ahjk: "Follow us"



        },
        RU: {
            home: 'Главная', projects: 'Проекты', about: 'О нас', contact: 'Контакты',
            back: 'Дизайн интерьера от эскиза до реализации',
            bac: 'Дизайн интерьеров для дома и бизнеса любой сложности. Получите консультацию уже сегодня',
            consultationBtn: 'Получить консультацию', txtbtn: 'Получить консультацию', txt: 'Оставьте свои контактные данные, и мы с вами свяжемся.',
            htxt: 'Гарантируем точное исполнение в срок',
            jtxt: 'Мы реализуем архитектурные и дизайнерские проекты любой сложности от фундамента до закупки текстиля.',
            stxt: '> Частные проекты', dtxt: '> horeca', ftxt: '> Архитектурные проекты', gtxt: '> Коммерческие проекты',
            sidetxt: 'Как мы работаем', sitxt: 'Этапы работы по', sdtxt: 'созданию дизайна', setxt: 'интерьера',
            dotxt: 'Консультация', dostxt: 'Мы обсуждаем ваши предпочтения, стиль и функциональные требования...',
            steptxt: 'Оформление договора', stetxt: 'После согласования концепции подписываем договор...',
            stttxt: 'Разработка планировки', stestxt: 'Мы создаем функциональную планировку...',
            sttptxt: 'Разработка дизайна', sttpptxt: 'На этом этапе создается концепция дизайна...',
            dosptxt: '3D-визуализация', dosdtxt: 'Мы создаем реалистичные 3D-визуализации...',
            stoptxt: 'Ремонтно-отделочные работы', stotxt: 'Мы проводим по созданному дизайну ремонтно-отделочные работы...', ptotxt: 'Мы предоставляем полный спектр услуг: от фундамента до декора',
            soztxt: 'АРХИТЕКТУРА И СТРОИТЕЛЬСТВО', sotxt: 'Занимаемся проектированием и реализацией архитектурных проектов.',
            sobtxt: 'ДИЗАЙН ИНТЕРЬЕРА', futtxt: 'Мы разрабатываем дизайн-проекты...',
            vizual: "3D-ВИЗУАЛИЗАЦИЯ", vizua: "Это возможность увидеть, как будет выглядеть интерьер...",
            online: 'ОНЛАЙН-ОТЧЕТ ДЛЯ НАШИХ КЛИЕНТОВ', onlin: 'Для полной прозрачности и удобства...',
            login: 'Войти в личный кабинет', 'consultation-btn': " получить консультацию", lefttxt: "Мы Гарантируем", leftxt: "Лучшее работы и даем в срок",
            righttxt: "Мы лучшие Архитектурных компаний в ташкенте вы можете доверится", btn: "Написать в телегграм", proj: "Наши проекты", port: "> в портфолио", mir: 'Жилой комплекс «Ак Сарай»  в Мирзо Улугбекском районе Спроектировано и построено ООО «Городской Строй». Это восьмиэтажное здание из 11 блоков. стал уникальным и современным архитектурным решением. Светлый  фасад здания,  элегантные декоративные элементы,  резные перила балконов здания  придает величественный вид.',
            mir2: "Жилой комплекс «Ак Сарай»  в Мирзо Улугбекском районе Спроектировано и построено ООО «Городской Строй». Это восьмиэтажное здание из 11 блоков. стал уникальным и современным архитектурным решением. Светлый  фасад здания, элегантные декоративные элементы,  резные перила балконов здания придает величественный вид.",
            mir3: "Жилой комплекс «Ак Сарай»  в Мирзо Улугбекском районе Спроектировано и построено ООО «Городской Строй». Это восьмиэтажное здание из 11 блоков. стал уникальным и современным архитектурным решением. Светлый  фасад здания, элегантные декоративные элементы,  резные перила балконов здания придает величественный вид.",
            mir4: "Жилой комплекс «Ак Сарай»  в Мирзо Улугбекском районе Спроектировано и построено ООО «Городской Строй». Это восьмиэтажное здание из 11 блоков. стал уникальным и современным архитектурным решением. Светлый  фасад здания, элегантные декоративные элементы,  резные перила балконов здания придает величественный вид.",
            mir5: "Жилой комплекс «Ак Сарай»  в Мирзо Улугбекском районе Спроектировано и построено ООО «Городской Строй». Это восьмиэтажное здание из 11 блоков. стал уникальным и современным архитектурным решением. Светлый  фасад здания, элегантные декоративные элементы,  резные перила балконов здания придает величественный вид.",
            mir6: "Жилой комплекс «Ак Сарай»  в Мирзо Улугбекском районе Спроектировано и построено ООО «Городской Строй». Это восьмиэтажное здание из 11 блоков. стал уникальным и современным архитектурным решением. Светлый  фасад здания, элегантные декоративные элементы,  резные перила балконов здания придает величественный вид.",
            coptxt: "Свяжитесь с нами", cotxt: "Fill out the form to contact us.", copltxt: "Заполните форму", label: "Имя", labe: "Номер", la: "Эллектроная почта", l: "Предмет", le: "Сообщение", sub: "ОТПРАВИТЬ СООБЩЕНИЕ", copritxt: "Свяжитесь с нами", sdf: "Эллектроная почта:", asd: "imamovarchitecture@gmail.com", ghj: "Номер:", qwe: "Адресс:", ewq: "Ozod kochasi Tahkent - 10002, Uzbekistan", uyt: "Imamov Architects занимается разработкой инновационных, устойчивых и неподвластных времени архитектурных решений. Благодаря страсти к творчеству и функциональности мы превращаем идеи в реальность, реализуя высококачественные проекты, соответствующие потребностям наших клиентов.",
            dfg: "О нас", dfh: "наши услуги", dfk: "проекты", dfa: "карьера", dfq: "контакт", jkl: "Связаться с нами", lkj: "Телефон: +998 (95)440-60-60", iop: "электронная почта", ios: "улица Озод Дом 21, 100002, Тоshkent, Toshkent, Uzbekistan", zxc: "Быстрые ссылки", ahjk: "Подписывайтесь на нас"

            
        }
    };

    btn.innerText = lang;
    for (let key in translations[lang]) {
        let element = document.querySelector(`.${key}`);
        if (element) element.innerText = translations[lang][key];
    }
});

const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessage = document.querySelector("#send-message");
const fileInput = document.querySelector("#file-input");
const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
const fileCancelButton = fileUploadWrapper.querySelector("#file-cancel");
const chatbotToggler = document.querySelector("#chatbot-toggler");
const closeChatbot = document.querySelector("#close-chatbot");

// API setup
const API_KEY = "AIzaSyCUixmt515OnN-bdsqG129aHaB7y1qDkmE";
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;

// Initialize user message and file data
const userData = {
  message: null,
  file: {
    data: null,
    mime_type: null,
  },
};

// Store chat history
const chatHistory = [];
const initialInputHeight = messageInput.scrollHeight;

// Create message element with dynamic classes and return it
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

// Generate bot response using API
const generateBotResponse = async (incomingMessageDiv) => {
  const messageElement = incomingMessageDiv.querySelector(".message-text");

  // Add user message to chat history
  chatHistory.push({
    role: "user",
    parts: [{ text: userData.message }, ...(userData.file.data ? [{ inline_data: userData.file }] : [])],
  });

  // API request options
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: chatHistory,
    }),
  };

  try {
    // Fetch bot response from API
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);

    // Extract and display bot's response text
    const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
    messageElement.innerText = apiResponseText;

    // Add bot response to chat history
    chatHistory.push({
      role: "model",
      parts: [{ text: apiResponseText }],
    });
  } catch (error) {
    // Handle error in API response
    console.log(error);
    messageElement.innerText = error.message;
    messageElement.style.color = "#ff0000";
  } finally {
    // Reset user's file data, removing thinking indicator and scroll chat to bottom
    userData.file = {};
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  }
};

// Handle outgoing user messages
const handleOutgoingMessage = (e) => {
  e.preventDefault();
  userData.message = messageInput.value.trim();
  messageInput.value = "";
  messageInput.dispatchEvent(new Event("input"));
  fileUploadWrapper.classList.remove("file-uploaded");

  // Create and display user message
  const messageContent = `<div class="message-text"></div>
                          ${userData.file.data ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="attachment" />` : ""}`;

  const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
  outgoingMessageDiv.querySelector(".message-text").innerText = userData.message;
  chatBody.appendChild(outgoingMessageDiv);
  chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

  // Simulate bot response with thinking indicator after a delay
  setTimeout(() => {
    const messageContent = `<img class="bot-avatar" src="robotic.png" alt="Chatbot Logo" width="50" height="50">
          </img>
          <div class="message-text">
            <div class="thinking-indicator">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>`;

    const incomingMessageDiv = createMessageElement(messageContent, "bot-message", "thinking");
    chatBody.appendChild(incomingMessageDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    generateBotResponse(incomingMessageDiv);
  }, 600);
};

// Adjust input field height dynamically
messageInput.addEventListener("input", () => {
  messageInput.style.height = `${initialInputHeight}px`;
  messageInput.style.height = `${messageInput.scrollHeight}px`;
  document.querySelector(".chat-form").style.borderRadius = messageInput.scrollHeight > initialInputHeight ? "15px" : "32px";
});

// Handle Enter key press for sending messages
messageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if (e.key === "Enter" && !e.shiftKey && userMessage && window.innerWidth > 768) {
    handleOutgoingMessage(e);
  }
});

// Handle file input change and preview the selected file
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    fileInput.value = "";
    fileUploadWrapper.querySelector("img").src = e.target.result;
    fileUploadWrapper.classList.add("file-uploaded");
    const base64String = e.target.result.split(",")[1];

    // Store file data in userData
    userData.file = {
      data: base64String,
      mime_type: file.type,
    };
  };

  reader.readAsDataURL(file);
});

// Cancel file upload
fileCancelButton.addEventListener("click", () => {
  userData.file = {};
  fileUploadWrapper.classList.remove("file-uploaded");
});

// Initialize emoji picker and handle emoji selection
const picker = new EmojiMart.Picker({
  theme: "light",
  skinTonePosition: "none",
  previewPosition: "none",
  onEmojiSelect: (emoji) => {
    const { selectionStart: start, selectionEnd: end } = messageInput;
    messageInput.setRangeText(emoji.native, start, end, "end");
    messageInput.focus();
  },
  onClickOutside: (e) => {
    if (e.target.id === "emoji-picker") {
      document.body.classList.toggle("show-emoji-picker");
    } else {
      document.body.classList.remove("show-emoji-picker");
    }
  },
});

document.querySelector(".chat-form").appendChild(picker);

sendMessage.addEventListener("click", (e) => handleOutgoingMessage(e));
document.querySelector("#file-upload").addEventListener("click", () => fileInput.click());
closeChatbot.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));