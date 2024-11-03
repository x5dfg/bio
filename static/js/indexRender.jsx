// Import React and components
const { useState, useEffect } = React;
const unixTime = 1221272700;
const myNick = 'x5dfg';

function Header({ setActiveSection }) {
    return (
        <header>
            <a href="/"><img className="logo" src="./static/img/ppl-logo-mono-white.png"/></a>
            <nav>
                <a href="#about" onClick={() => setActiveSection('about')}>Обо мне</a> 
                <a href="#projects" onClick={() => setActiveSection('projects')}>Проекты</a> 
                <a href="#links" onClick={() => setActiveSection('links')}>Ссылки</a>
            </nav>
            <a href="/"><img className="logo" src="./static/img/ppl-logo-mono-white.png"/></a>
        </header>
    ); 
}

function App() {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const hash = window.location.hash.replace('#', '') || 'about';
        setActiveSection(hash);
    }, []);

    useEffect(() => {
        window.location.hash = activeSection;
    }, [activeSection]);

    return (
        <div>
            <Header setActiveSection={setActiveSection} />
            <div className="container">
                {activeSection === 'about' && <About />}
                {activeSection === 'projects' && <Projects />}
                {activeSection === 'links' && <Links />}
            </div>
            <footer>
                <p>&copy; {new Date().getFullYear()} {window.location.hostname}</p>
                <p>Дизайн частично взят с <a target="_blank" href="https://pepeland.net/">pepeland.net</a></p>
                <p>НЕ ЯВЛЯЕТСЯ ОФИЦИАЛЬНЫМ [ПРОДУКТОМ/УСЛУГОЙ/СОБЫТИЕМ И т. п.] MINECRAFT. НЕ ОДОБРЕНО И НЕ СВЯЗАНО С КОМПАНИЕЙ MOJANG ИЛИ MICROSOFT</p>
                <p>
                    <span><a target="_blank" href="https://ru.legacy.reactjs.org/">React.js</a></span>
                    <span><a target="_blank" href="https://babeljs.io/">Babel</a></span>
                </p>
            </footer>
        </div>
    );
}

function About() {
    const birthDate = new Date(unixTime * 1000); 
    const birthYear = birthDate.getFullYear();
    const currentYear = new Date().getFullYear(); 
    const age = currentYear - birthYear; 
    return (
        <section>
            <h2>{myNick}</h2>  
            <p>Я <b>{myNick}</b> - Мне {age} лет, живу в Санкт-Петербурге.</p>
            <p>Занимаюсь программированием с весны 2023г. Сначала изучал Python, позже начал верстать с HTML/CSS.</p> 
            <p>А, уже сейчас, активно интегрирую JavaScript в свои веб проекты, вместе с React и JQuery.</p>
            <p>Также, являюсь основателем и главой команды разработчиков <b>D-Core/Dev-Core</b> <i>(Называйте как угодно)</i></p>
            <p>Подробнее написано в разделах ниже.</p>
            <details name="how">
                <summary>Никнейм</summary>
                <p><b>{myNick}</b> - Был выбран, для того, чтобы подчеркнуть нашу с другом дружбу, у которого был схожий ник в телеграмме. К слову, дружим мы практически всю жизнь.</p>
                <p>Произношение ника: "ИксПятьДФГ"</p>
            </details>
            <details name="how">
                <summary>Команда</summary>
                <p>Команда разработчиков была создана 8 октября 2023г. А точнее её Дискорд.</p>
                <p>Изначально она не была <b>D-Core/Dev-Core</b>, первым названием было <b>DSC/DSC8</b> это было имя моего первого дискорд бота.</p>
                <p>Тогда, в команде был я и <b>Limeabeba.</b> <b>Limeabeba</b> был хостером проектов, а я разработкой</p>
                <p>Теперь же, у нас есть тестировщик. И всего в команде три человека.</p>
            </details>
            <details name="how">
                <summary>Игры</summary>
                <p>Играю в игры с механникой, автоматизацией или модами на это. Например Minecraft (Create), Scrap Mechanic, Mindustry и др.</p>
                <p>Также играю в слешеры по типу Ultrakill, и иногда гоночки.</p>
            </details>
            <details name="how">
                <summary>Музыка</summary>
                <p>Из музыки нравятся в основном осты и ремиксы из игр: Ultrakill, Doom, Mindustry, Atomic Heart и Metro.</p>
                <p>Любимые жанры: <b>Metal, Rock, BreackCore, Synthwave.</b></p>
            </details>
        </section>
    );
}

function Projects() {
    return (
        <section>
            <h2>Projects:</h2>
            <p>Я делаю проекты как в IT сфере, так и в игровой. Например, ресурспаки для <b>Minecraft</b></p>

            <details name="how">
                <summary>Minecraft</summary>
                <div className="blockInfo">
                    <img className="blockIcon" src="https://github.com/x5dfg/bio/blob/main/assets/minecraft/pack.png?raw=true" alt="Resource Pack Icon" />
                    <div className="blockDescription">
                        <p>Текстурпак изменяющий текстуры специфичных объектов на грибную тематику.</p>
                        <p>Например, солнце в виде гриба или перекрестие. <b>Версия 1.16.X</b> (Обновления ещё будут)</p>
                        <a href="./assets/minecraft/SPECIAL MUSHROOMS FORCES.zip" className="blockButton" download>Для 1.16</a>
                    </div>
                </div>
            </details>

            <details name="how">
                <summary>Discord</summary>
                <div className="blockInfo">
                    <img className="blockIcon" src="https://cdn.discordapp.com/avatars/1255982377386119251/9feafd2b4ae2cdbd5976be3cf312f4ba.png?size=1024" alt="Discord Bot Avatar" />
                    <div className="blockDescription">
                        <p><b>Triplex</b> - Бот инструмент/утилита. Имеет интеграции с АПИ: Nasa, OWM и Tenor.</p>
                        <p>Присутствует перевод слеш команд на пять языков.</p>
                        <span>
                            <a target="_blank" href="https://discord.com/oauth2/authorize?client_id=1255982377386119251&permissions=9195458784336&integration_type=0&scope=bot" className="blockButton">Добавить</a>
                            <a target="_blank" href="https://top.gg/bot/1255982377386119251/vote" className="blockButton">Дать голос</a>
                        </span>
                    </div>
                </div>
            </details>
            <details name="how">
                <summary>Telegram</summary>
                <p>Скоро будет.</p>
            </details>
            <details name="how">
                <summary>Project 5</summary>
                <div className="blockInfo">
                    <img className="blockIcon" src="https://cdn.discordapp.com/icons/1160516320455036949/59dc8c9bb1af0a72fc2cae434a8b0f85.png?size=1024" alt="Discord Server Icon" />
                    <div className="blockDescription">
                        <p>Project №5 (pre-alpha)</p>
                    </div>
                </div>
            </details>
        </section>
    );
}



function Links() {
    return (
        <section className="links-container">
            <h2 className="links-heading">Media links:</h2>
            <a target="_blank" href="https://t.me/x5dfg_dcore" className="link-item">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon">
                    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"></path>
                </svg>
            </a>
            <a target="_blank" href="https://www.youtube.com/@x5dfg-dcore?sub_confirmation=1" className="link-item">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
            </a>
            <a target="_blank" href="https://github.com/x5dfg" className="link-item">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="icon">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.387.6.111.82-.26.82-.577v-2.168c-3.338.726-4.033-1.415-4.033-1.415-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.204.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.305 3.492.997.108-.774.418-1.305.762-1.605-2.665-.305-5.467-1.333-5.467-5.933 0-1.311.467-2.381 1.236-3.221-.123-.305-.536-1.528.116-3.181 0 0 1.008-.322 3.301 1.23.96-.266 1.983-.399 3.003-.404 1.02.005 2.043.138 3.004.404 2.291-1.553 3.298-1.23 3.298-1.23.653 1.653.24 2.876.118 3.181.77.84 1.235 1.91 1.235 3.221 0 4.61-2.805 5.625-5.477 5.921.43.372.814 1.105.814 2.228v3.301c0 .32.219.694.825.576C20.565 21.797 24 17.298 24 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
            </a>
        </section>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
