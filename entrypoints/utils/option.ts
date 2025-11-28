export const services = {
    // 传统机器翻译
    microsoft: "microsoft",
    deepL: "deepL",
    deeplx: "deeplx",
    google: "google",
    xiaoniu: "xiaoniu",
    youdao: "youdao",
    tencent: "tencent", // 腾讯云机器翻译
    // 大模型翻译
    openai: "openai",
    azureOpenai: "azureOpenai", // Azure OpenAI
    gemini: "gemini",
    yiyan: "yiyan",
    tongyi: "tongyi",
    zhipu: "zhipu",
    moonshot: "moonshot",
    claude: "claude",
    custom: "custom",
    infini: "infini",
    // baidu: 'baidu',
    baichuan: "baichuan",
    lingyi: "lingyi",
    deepseek: "deepseek",
    minimax: "minimax",
    jieyue: "jieyue", // 阶跃星辰
    groq: "groq",
    cozecom: "cozecom", // coze 支持机器人不支持模型
    cozecn: "cozecn",
    huanYuan: "huanYuan", // 腾讯混元
    huanYuanTranslation: "huanYuanTranslation", // 腾讯混元翻译大模型
    doubao: "doubao", // 字节豆包
    siliconCloud: "siliconCloud", // 硅流
    openrouter: "openrouter", // openrouter
    grok: "grok", // X.AI 的 Grok
    newapi: "newapi", // New API 接口
    chromeTranslator: "chromeTranslator", // Chrome 内置翻译 API
};

export const servicesType = {
    // 阵营划分
    machine: new Set([services.microsoft, services.deepL, services.deeplx, services.google, services.xiaoniu, services.youdao, services.tencent, services.chromeTranslator,]),
    AI: new Set([
        services.openai,
        services.azureOpenai,
        services.gemini,
        services.yiyan,
        services.tongyi,
        services.zhipu,
        services.moonshot,
        services.claude, services.custom,
        services.infini,
        services.baichuan,
        services.deepseek,
        services.lingyi,
        services.minimax,
        services.jieyue,
        services.groq,
        services.cozecom,
        services.cozecn,
        services.huanYuan,
        services.huanYuanTranslation,
        services.doubao,
        services.siliconCloud,
        services.openrouter,
        services.grok,
        services.newapi,
    ]),
    // 需要 token
    useToken: new Set([
        services.openai,
        services.azureOpenai,
        services.gemini,
        services.tongyi,
        services.zhipu,
        services.moonshot,
        services.claude,
        services.deepL,
        services.deeplx,
        services.xiaoniu,
        services.infini,
        services.baichuan,
        services.deepseek,
        services.lingyi,
        services.minimax,
        services.jieyue,
        services.groq,
        services.custom,
        services.cozecom,
        services.cozecn,
        services.huanYuan,
        services.doubao,
        services.siliconCloud,
        services.openrouter,
        services.grok,
        services.newapi,
    ]),
    // 需要 model
    useModel: new Set([
        services.openai,
        services.azureOpenai,
        services.gemini,
        services.yiyan,
        services.tongyi,
        services.zhipu,
        services.moonshot,
        services.claude,
        services.custom,
        services.infini,
        services.baichuan,
        services.deepseek,
        services.lingyi,
        services.minimax,
        services.jieyue,
        services.groq,
        services.huanYuan,
        services.huanYuanTranslation,
        services.doubao,
        services.siliconCloud,
        services.openrouter,
        services.grok,
        services.newapi,
    ]),
    // 支持代理
    useProxy: new Set([
        services.openai,
        services.azureOpenai,
        services.gemini,
        services.claude,
        services.google,
        services.deepL,
        services.deeplx,
        services.moonshot,
        services.tongyi,
        services.xiaoniu,
        services.youdao,
        services.tencent,
        services.baichuan,
        services.deepseek,
        services.lingyi,
        services.jieyue,
        services.groq,
        services.cozecom,
        services.cozecn,
        services.huanYuan,
        services.huanYuanTranslation,
        services.doubao,
        services.siliconCloud,
        services.openrouter,
        services.grok,
    ]),
    // 支持自定义 URL 的服务
    useCustomUrl: new Set([
        services.custom,
        services.deeplx,
        services.newapi,
        services.azureOpenai,
    ]),

    isMachine: (service: string) => servicesType.machine.has(service),
    isAI: (service: string) => servicesType.AI.has(service),
    isUseToken: (service: string) => servicesType.useToken.has(service),
    isUseProxy: (service: string) => servicesType.useProxy.has(service),
    isUseModel: (service: string) => servicesType.useModel.has(service),
    isCustom: (service: string) => service === services.custom,
    isNewApi: (service: string) => service === services.newapi,
    isUseAkSk: (service: string) => service === services.yiyan,
    isCoze: (service: string) => service === services.cozecom || service === services.cozecn,
    isYoudao: (service: string) => service === services.youdao,
    isTencent: (service: string) => service === services.tencent || service === services.huanYuanTranslation,
    isAzureOpenai: (service: string) => service === services.azureOpenai,
    isUseCustomUrl: (service: string) => servicesType.useCustomUrl.has(service),
};

export const customModelString = "自定义模型";
export const models = new Map<string, Array<string>>([
    [services.openai, ["gpt-5-nano", "gpt-5-mini", "gpt5", "gpt-5-chat-latest", "gpt-4.1", "gpt-4.1-mini", "gpt-4.1-nano", "gpt-4o-mini", "gpt-4o", "o3", "o3-mini", customModelString]],
    [services.azureOpenai, ["gpt-5-nano", "gpt-5-mini", "gpt5", "gpt-5-chat-latest", "gpt-4.1", "gpt-4.1-mini", "gpt-4.1-nano", "gpt-4o-mini", "gpt-4o", "o3", "o3-mini", customModelString]],
    [services.gemini, ["gemini-2.5-flash-lite", "gemini-2.5-flash", "gemini-2.5-pro", customModelString]],
    [services.yiyan, ["ERNIE-Bot 4.0", "ERNIE-Bot", "ERNIE-Speed-8K"]],
    [services.tongyi, ["qwen-long", "qwen-turbo", "qwen-plus", "qwen3-8b", "qwen-mt-plus", "qwen-mt-turbo", customModelString]],
    [services.zhipu, ["glm-4.5", "GLM-4-Flash", "glm-4-plus", "glm-4", "glm-4v", customModelString]],
    [services.moonshot, ["kimi-k2-0711-preview", "kimi-k2-turbo-preview", "moonshot-v1-auto", "moonshot-v1-8k", "moonshot-v1-32k", customModelString]],
    [services.claude, ["claude-sonnet-4-0", "claude-opus-4-1", "claude-3-5-haiku-latest"]],
    [services.custom, ["gpt-5-nano", "gpt-5-mini", "gpt5", "gpt-4o", "gemma:7b", "llama2:7b", "mistral:7b", customModelString]],
    [services.infini, ["llama-2-13b-chat", "llama-3.3-70b-instruct", "qwen2.5-14b-instruct", "gemma-2-27b-it", "glm-4-9b-chat", customModelString]],
    [services.baichuan, ["Baichuan4-Air", "Baichuan4-Turbo", "Baichuan4", customModelString]],
    [services.lingyi, ["yi-lightning", customModelString]],
    [services.deepseek, ["deepseek-chat", "deepseek-reasoner", customModelString]],
    [services.minimax, ["chatcompletion_v2"]],
    [services.jieyue, ["step-1-8k", customModelString]],
    [services.huanYuan, ["hunyuan-turbos-latest", "hunyuan-t1-latest", "hunyuan-a13b", "hunyuan-lite", "hunyuan-standard", customModelString]],
    [services.huanYuanTranslation, ["hunyuan-translation", "hunyuan-translation-lite", customModelString]],
    [services.newapi, ["gemini-2.5-flash-lite", "gemini-2.0-flash", "gpt-5-nano", "gpt-5-mini", "gpt5", "gpt-4.1-mini", "gpt-4.1-nano", "gpt-4o-mini", customModelString]],
    [services.grok, ["grok-4-0709","grok-3-mini", customModelString]],
    [services.doubao, [customModelString]],

    // mix model
    [services.siliconCloud, ["Qwen/Qwen3-Coder-30B-A3B-Instruct", "Qwen/Qwen3-8B", "THUDM/GLM-Z1-9B-0414", "THUDM/GLM-4-9B-0414",
        "deepseek-ai/DeepSeek-R1-Distill-Qwen-7B", "deepseek-ai/DeepSeek-R1-Distill-Qwen-1.5B",
        "Qwen/Qwen2.5-7B-Instruct", "internlm/internlm2_5-7b-chat", "THUDM/glm-4-9b-chat", customModelString]],

    [services.groq, ["llama-3.1-8b-instant", "llama3-8b-8192", "llama-3.3-70b-versatile", "gemma2-9b-it", "mixtral-8x7b-32768", "whisper-large-v3", customModelString]],
    [services.openrouter, ["meta-llama/llama-3.1-8b-instruct", "google/gemini-2.0-flash-exp", "qwen/qwen-2-7b-instruct", "huggingfaceh4/zephyr-7b-beta", customModelString]]
]);

export const options = {
    on: [
        {value: true, label: "開啟"},
        {value: false, label: "關閉"},
    ],
    // 是否即时翻译
    autoTranslate: [
        {value: true, label: "開啟"},
        {value: false, label: "關閉"},
    ],
    // 是否使用缓存
    useCache: [
        {value: true, label: "開啟"},
        {value: false, label: "關閉"},
    ],
    form: [{value: "auto", label: "自動檢測"}],
    to: [
        {value: "zh-Hant", label: "正體中文"},
        {value: "en", label: "英語"},
        {value: "ja", label: "日語"},
        {value: "ko", label: "韓語"},
        {value: "fr", label: "法語"},
        {value: "ru", label: "俄語"},
    ],
    keys: [
        {value: "none", label: "禁用快捷鍵"},

        {value: "Computer", label: "鍵盤選項", disabled: true},
        {value: "Control", label: "Ctrl"},
        {value: "Alt", label: "Alt"},
        {value: "Shift", label: "Shift"},
        {value: "Escape", label: "ESC"},
        {value: "`", label: "波浪號鍵"},

        {value: "mouse", label: "滑鼠選項", disabled: true},
        {value: "DoubleClick", label: "滑鼠雙擊"},
        {value: "LongPress", label: "滑鼠長按"},
        {value: "MiddleClick", label: "滑鼠滾輪單擊"},

        {value: "touchscreen", label: "觸控螢幕選項", disabled: true},
        {value: "TwoFinger", label: "雙指翻譯"},
        {value: "ThreeFinger", label: "三指翻譯"},
        {value: "FourFinger", label: "四指翻譯"},
        {value: "DoubleClickScree", label: "雙擊翻譯"},
        {value: "TripleClickScree", label: "三擊翻譯"},
        
        {value: "custom", label: "自定義快捷鍵（測試版）"},
    ],
    services: [
        // 传统机器翻译
        {value: "machine", label: "機器翻譯", disabled: true},
        {value: services.microsoft, label: "微軟翻譯"},
        {value: services.google, label: "Google 翻譯"},
        {value: services.deepL, label: "DeepL"},
        {value: services.deeplx, label: "DeepLX"},
        {value: services.xiaoniu, label: "小牛翻譯"},
        {value: services.youdao, label: "有道翻譯"},
        {value: services.tencent, label: "騰訊雲翻譯"},
        // 大模型翻译
        {value: "ai", label: "AI 翻譯", disabled: true},
        {value: services.chromeTranslator, label: "Chrome 內建 AI 翻譯⭐"},
        {value: services.siliconCloud, label: "硅基流動⭐️"},
        {value: services.huanYuan, label: "騰訊混元⭐"},
        {value: services.newapi, label: "New API"},
        {value: services.deepseek, label: "DeepSeek️"},
        {value: services.openai, label: "OpenAI"},
        {value: services.azureOpenai, label: "Azure OpenAI"},
        {value: services.huanYuanTranslation, label: "騰訊混元翻譯"},
        {value: services.tongyi, label: "阿里通義"},
        {value: services.doubao, label: "字節豆包"},
        {value: services.grok, label: "Grok (X.AI)"},
        {value: services.openrouter, label: "OpenRouter"},
        {value: services.groq, label: "Groq"},
        {value: services.moonshot, label: "Kimi"},
        {value: services.zhipu, label: "智譜清言"},
        {value: services.baichuan, label: "百川智能"},
        {value: services.lingyi, label: "零一萬物"},
        {value: services.minimax, label: "MiniMax"},
        {value: services.jieyue, label: "階躍星辰"},
        {value: services.infini, label: "無向芯穹"},
        {value: services.cozecom, label: "Coze 國際"},
        {value: services.cozecn, label: "Coze 國內"},
        {value: services.claude, label: "Claude"},
        {value: services.gemini, label: "Gemini"},
        {value: services.yiyan, label: "文心一言"},
        {value: services.custom, label: "自定義介面⭐️"},
    ],
    display: [
        {value: 0, label: "僅譯文模式"},
        {value: 1, label: "雙語對照模式"},
    ],
    // 双语翻译样式
    styles: [
        // 基础样式
        {value: "basic", label: "基礎樣式", disabled: true},
        {value: 0, label: "樸素模式", class: "fluent-display-default", group: "basic"},
        {value: 1, label: "加粗顯示", class: "fluent-display-bold", group: "basic"},
        {value: 2, label: "優雅斜體", class: "fluent-display-italic", group: "basic"},
        {value: 3, label: "立體陰影", class: "fluent-display-text-shadow", group: "basic"},

        // 下划线系列
        {value: "underline", label: "下底線系列", disabled: true},
        {value: 4, label: "藍色實線", class: "fluent-display-solid-underline", group: "underline"},
        {value: 5, label: "優雅虛線", class: "fluent-display-dot-underline", group: "underline"},
        {value: 6, label: "活潑波浪", class: "fluent-display-wavy", group: "underline"},

        // 卡片系列
        {value: "card", label: "卡片系列", disabled: true},
        {value: 7, label: "簡約卡片", class: "fluent-display-card-mode", group: "card"},
        {value: 8, label: "漸層卡片", class: "fluent-display-modern-card", group: "card"},
        {value: 9, label: "紙張卡片", class: "fluent-display-paper", group: "card"},

        // 高亮系列
        {value: "highlight", label: "高亮系列", disabled: true},
        {value: 10, label: "學習標記", class: "fluent-display-learning-mode", group: "highlight"},
        {value: 11, label: "螢光標記", class: "fluent-display-marker", group: "highlight"},
        {value: 12, label: "柔和漸層", class: "fluent-display-highlight-fade", group: "highlight"},

        // 背景色系列
        {value: "background", label: "背景色系列", disabled: true},
        {value: 13, label: "溫暖黃底", class: "fluent-display-lightyellow", group: "background"},
        {value: 14, label: "清新藍底", class: "fluent-display-lightblue", group: "background"},
        {value: 15, label: "素雅灰底", class: "fluent-display-lightgray", group: "background"},

        // 特殊效果
        {value: "special", label: "特殊效果", disabled: true},
        {value: 16, label: "典雅引用", class: "fluent-display-quote", group: "special"},
        {value: 17, label: "輕巧邊框", class: "fluent-display-border", group: "special"},
        {value: 18, label: "閱讀焦點", class: "fluent-display-focus", group: "special"},
        {value: 19, label: "簡約底線", class: "fluent-display-clean", group: "special"},

        // 专业样式
        {value: "pro", label: "專業樣式", disabled: true},
        {value: 20, label: "程式碼風格", class: "fluent-display-tech", group: "pro"},
        {value: 21, label: "書籍風格", class: "fluent-display-elegant", group: "pro"},

        // 透明度
        {value: "transparent", label: "透明效果", disabled: true},
        {value: 22, label: "半透明弱化", class: "fluent-display-dimmed", group: "transparent"},
        {value: 23, label: "輕透明感", class: "fluent-display-transparent-mode", group: "transparent"},
    ],
    // 悬浮球快捷键选项
    floatingBallHotkeys: [
        {value: "none", label: "禁用快捷鍵"},
        {value: "Alt+T", label: "Alt+T / Option+T (預設)"},
        {value: "Alt+A", label: "Alt+A / Option+A"},
        {value: "Alt+S", label: "Alt+S / Option+S"},
        {value: "Alt+D", label: "Alt+D / Option+D"},
        {value: "Alt+Q", label: "Alt+Q / Option+Q"},
        {value: "Ctrl+Shift+T", label: "Ctrl+Shift+T / Control+Shift+T"},
        {value: "Ctrl+Shift+A", label: "Ctrl+Shift+A / Control+Shift+A"},
        {value: "F9", label: "F9"},
        {value: "F10", label: "F10"},
        {value: "F11", label: "F11"},
        {value: "F12", label: "F12"},
        {value: "custom", label: "自定義快捷鍵（測試版）"},
    ],
    theme: [
        {value: "auto", label: "跟隨作業系統"},
        {value: "light", label: "亮色主題"},
        {value: "dark", label: "暗色主題"},
    ],
    // 输入框翻译目标语言选项
    // 输入框翻译目标语言选项
    inputBoxTranslationTarget: [
        {value: "zh-Hant", label: "正體中文"},
        {value: "en", label: "英語"},
        {value: "ja", label: "日語"},
        {value: "ko", label: "韓語"},
        {value: "fr", label: "法語"},
        {value: "ru", label: "俄語"},
        {value: "es", label: "西班牙語"},
        {value: "de", label: "德語"},
        {value: "pt", label: "葡萄牙語"},
        {value: "it", label: "義大利語"},
    ],
    // 输入框翻译触发方式选项
    inputBoxTranslationTrigger: [
        {value: "disabled", label: "關閉"},
        {value: "triple_space", label: "連按三下空白鍵"},
        {value: "triple_equal", label: "連按三下等號(=)"},
        {value: "triple_dash", label: "連按三下短橫線(-)"},
    ],
};

export const defaultOption = {
    on: true,
    from: "auto",
    to: "zh-Hant",
    style: 1,
    display: 1,
    hotkey: "Control",
    service: services.microsoft,
    custom: "http://localhost:11434/v1/chat/completions",
    deeplx: "http://localhost:1188/translate",
    system_role:
        "You are a professional, authentic machine translation engine.",
    user_role: `Translate the following text into {{to}}, If translation is unnecessary (e.g. proper nouns, codes, etc.), return the original text. NO explanations. NO notes:

{{origin}}`,
    count: 0,
    useCache: true,
    floatingBallHotkey: "Alt+T", // 默认悬浮球快捷键
    inputBoxTranslationTrigger: "disabled", // 默认关闭输入框翻译
    inputBoxTranslationTarget: "en", // 默认翻译成英文
};

