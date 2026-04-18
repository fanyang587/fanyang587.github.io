(function () {
  "use strict";

  var STORAGE_KEY = "site-lang";

  var bundles = {
    index: {
      en: {
        "page.title": "Fan Yang's Home Page",
        "site.title": "Fan Yang's Home Page",
        "menu.home": "Home",
        "menu.publications": "Publications",
        "section.home": "Home",
        "quick.bio": "Short Biography",
        "quick.interest": "Research Interests",
        "quick.job": "Research Experience",
        "quick.edu": "Education",
        "profile.role": "Senior Scientist",
        "section.news": "News",
        "news.item1": "💥 3 papers have been accepted by CVPR2026 (2 posters, 1 oral).",
        "news.item2": "💥 1 paper has been accepted by AAAI2026.",
        "news.item3": "💥 Elected as Senior PC of ICMR2026.",
        "section.bio": "Short Biography",
        "bio.text":
          "Fan Yang received the B.S. degree in software engineering from Southwest Petroleum University in 2010, and the Doctor's degree in information and communication engineering from University of Electronic Science and Technology of China (UESTC), in 2018. He was a research intern with Microsoft Research Asia (MSRA). He was a research scholar in the department of computer science, University of North Carolina and also in the department of Radiology and BRIC, University of North Carolina. He was Research Associate in IIAI. Now, he is a senior scientist with <a href=\"https://aiqintelligence.ae/\" target=\"_blank\">AIQ</a>, UAE. His research interests include computer vision, deep learning and medical image processing.",
        "section.interests": "Research Interests",
        "interest.cv": "Computer Vision",
        "interest.3d": "3D Vision",
        "interest.gen": "Generative Model",
        "interest.med": "Medical Image Analysis",
        "interest.ml": "Machine learning",
        "section.experience": "Research Experience",
        "exp.ss": "Senior Scientist",
        "exp.ra": "Research Associate",
        "exp.pd": "Post Doctoral",
        "exp.ri": "Research Intern",
        "section.edu": "Education",
        "edu.phd": "PhD. student",
        "edu.ms": "M.S. student",
        "edu.bs": "B.S. student",
        "section.selected": "Selected Publication"
      },
      zh: {
        "page.title": "杨帆个人主页",
        "site.title": "杨帆个人主页",
        "menu.home": "首页",
        "menu.publications": "论文",
        "section.home": "首页",
        "quick.bio": "个人简介",
        "quick.interest": "研究兴趣",
        "quick.job": "研究经历",
        "quick.edu": "教育背景",
        "profile.role": "高级科学家",
        "section.news": "新闻",
        "news.item1": "💥 3 篇论文被 CVPR2026 接收（2 篇 poster，1 篇 oral）。",
        "news.item2": "💥 1 篇论文被 AAAI2026 接收。",
        "news.item3": "💥 当选 ICMR2026 Senior PC。",
        "section.bio": "个人简介",
        "bio.text":
          "杨帆于 2010 年获得西南石油大学软件工程学士学位，于 2018 年获得电子科技大学信息与通信工程博士学位。曾在微软亚洲研究院（MSRA）担任研究实习生，曾在北卡罗来纳大学计算机系及放射科与 BRIC 从事访问研究工作，曾任阿布扎比人工智能研究院（IIAI）研究助理。现任阿联酋 <a href=\"https://aiqintelligence.ae/\" target=\"_blank\">AIQ</a> 高级科学家。研究方向包括计算机视觉、深度学习与医学图像处理。",
        "section.interests": "研究兴趣",
        "interest.cv": "计算机视觉",
        "interest.3d": "三维视觉",
        "interest.gen": "生成模型",
        "interest.med": "医学图像分析",
        "interest.ml": "机器学习",
        "section.experience": "研究经历",
        "exp.ss": "高级科学家",
        "exp.ra": "研究助理",
        "exp.pd": "博士后",
        "exp.ri": "研究实习生",
        "section.edu": "教育背景",
        "edu.phd": "博士研究生",
        "edu.ms": "硕士研究生",
        "edu.bs": "本科生",
        "section.selected": "代表性论文"
      }
    },
    publication: {
      en: {
        "page.title": "Fan Yang (Senior Scientist at AIQ)",
        "site.title": "Fan Yang (Senior Scientist at AIQ)",
        "menu.home": "Home",
        "menu.publications": "Publications",
        "section.publications": "Publications",
        "note.equal": "An asterisk (*) beside authors' names indicates equal contribution or corresponding author.",
        "year.2026": "2026",
        "year.2025": "2025",
        "year.2024": "2024",
        "year.2023": "2023",
        "year.2022": "2022",
        "year.2021": "2021",
        "year.2020": "2020",
        "year.before2020": "Before"
      },
      zh: {
        "page.title": "杨帆(AIQ 高级科学家)",
        "site.title": "杨帆(AIQ 高级科学家)",
        "menu.home": "首页",
        "menu.publications": "论文",
        "section.publications": "论文",
        "note.equal": "作者姓名旁的星号（*）表示共同一作或通讯作者。",
        "year.2025": "2025 年",
        "year.2024": "2024 年",
        "year.2023": "2023 年",
        "year.2022": "2022 年",
        "year.2021": "2021 年",
        "year.2020": "2020 年",
        "year.before2020": "2020 年之前"
      }
    }
  };

  function normalizeLang(lang) {
    return lang === "zh" ? "zh" : "en";
  }

  function getInitialLang() {
    var urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang) {
      return normalizeLang(urlLang);
    }
    return normalizeLang(localStorage.getItem(STORAGE_KEY) || "en");
  }

  function setText(bundle) {
    var textNodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < textNodes.length; i += 1) {
      var key = textNodes[i].getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(bundle, key)) {
        textNodes[i].textContent = bundle[key];
      }
    }

    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlNodes.length; j += 1) {
      var htmlKey = htmlNodes[j].getAttribute("data-i18n-html");
      if (Object.prototype.hasOwnProperty.call(bundle, htmlKey)) {
        htmlNodes[j].innerHTML = bundle[htmlKey];
      }
    }
  }

  function applyLang(lang) {
    var page = document.body.getAttribute("data-page");
    var pageBundle = bundles[page] || {};
    var bundle = pageBundle[lang] || pageBundle.en || {};

    setText(bundle);

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    localStorage.setItem(STORAGE_KEY, lang);

    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.textContent = lang === "zh" ? "English" : "中文";
    }
  }

  var currentLang = getInitialLang();
  applyLang(currentLang);

  var toggleButton = document.getElementById("lang-toggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", function () {
      currentLang = currentLang === "zh" ? "en" : "zh";
      applyLang(currentLang);
    });
  }
})();
