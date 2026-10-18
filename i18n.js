// 多语言字典
const lang = {
    zh_Hans: {
        home: "首页",
        blog: "博客",
        online_projects: "在线项目",
        projects: "项目集",
        site_title: "吉辰良景的博客",
        welcome_text: "你好，欢迎访问我的博客",
        on_more: "暂无更多",
        back: "返回",
        back_to_home: "返回首页",
        text_404: "哎呀，页面走丢了",
        alert_back_to_home: "无上一页，即将返回首页"
    },
    zh_Hant: {
        home: "首頁",
        blog: "部落格",
        online_projects: "線上專案",
        projects: "專案集",
        site_title: "吉辰良景的部落格",
        welcome_text: "你好，歡迎造訪我的部落格",
        on_more: "暫無更多",
        back: "返回",
        back_to_home: "返回首頁",
        text_404: "哎呀，頁面走失了",
        alert_back_to_home: "沒有上一頁，即將返回首頁"
    },
    en: {
        home: "Home",
        blog: "Blog",
        online_projects: "Online Projects",
        projects: "Projects",
        site_title: "GoodView's Blog",
        welcome_text: "Hello, welcome to my blog",
        on_more: "No more content",
        back: "Back",
        back_to_home: "Back to Home",
        text_404: "Oops, page not found",
        alert_back_to_home: "No previous page, redirecting to home"
    },
    jp: {
        home: "ホーム",
        blog: "ブログ",
        online_projects: "オンラインプロジェクト",
        projects: "プロジェクト一覧",
        site_title: "吉辰良景のブログ",
        welcome_text: "こんにちは、私のブログへようこそ",
        on_more: "これ以上ありません",
        back: "戻る",
        back_to_home: "ホームへ戻る",
        text_404: "おっと、ページが見つかりません",
        alert_back_to_home: "前のページがありません。ホームへ移動します"
    }
};

// 更新页面所有多语言文本
function updateLang(langKey){
    const langData = lang[langKey] ?? lang.zh_Hans;
    document.title = langData.site_title;
    document.documentElement.lang = langKey === "zh_Hans" ? "zh-CN" : langKey === "zh_Hant" ? "zh-TW" : langKey === "en" ? "en" : "ja";
    document.querySelectorAll("[data-i18n]").forEach(el=>{
        const key = el.getAttribute("data-i18n");
        if(langData[key]) el.innerText = langData[key];
    })
}

// 自动检测浏览器系统语言
function getBrowserLang(){
    const navLang = navigator.language || navigator.userLanguage;
    if(navLang.startsWith("zh-CN")) return "zh_Hans";
    if(navLang.startsWith("zh-TW") || navLang.startsWith("zh-HK")) return "zh_Hant";
    if(navLang.startsWith("en")) return "en";
    if(navLang.startsWith("ja")) return "jp";
    return "zh_Hans";
}
