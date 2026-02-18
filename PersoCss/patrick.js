const elements = {
    timeframeSelect: document.getElementById('temps'),
    infoContent: document.getElementById('info-content'),
    periodLabel: document.getElementById('period-label'),
    citationText: document.getElementById('citation-text'),
    citationAuthor: document.getElementById('citation-author'),
};

const profile = {
    name: 'Nomentsoa Patrick',
    origin: 'Andranomadio, Tsiroanomandidy, Bongolava',
};

const citations = [
    {
        text: 'Il ne savait pas que c\'etait impossible donc il l\'a fait.',
        author: 'Mark Twain',
    },
    {
        text: 'Le succes est la somme de petits efforts repetes jour apres jour.',
        author: 'Robert Collier',
    },
    {
        text: 'La discipline est le pont entre les objectifs et les resultats.',
        author: 'Jim Rohn',
    },
    {
        text: 'N\'attends pas. Le temps ne sera jamais parfait.',
        author: 'Napoleon Hill',
    },
    {
        text: 'Une vision sans execution reste une hallucination.',
        author: 'Thomas Edison',
    },
    {
        text: 'Chaque ligne de code est une chance de devenir meilleur.',
        author: 'Citation personnelle',
    },
];

const infoByPeriod = {
    passe: {
        label: 'Mon parcours dans le passe',
        years: 'Debut',
        items: [
            {
                title: 'Origine',
                text: `Je viens de ${profile.origin}.`,
            },
            {
                title: 'Premiers centres d\'interet',
                text: 'J\'ai tres tot aime coder, chanter et jouer de la guitare.',
            },
            {
                title: 'Etat d\'esprit',
                text: 'Je cherchais surtout a apprendre rapidement et a progresser chaque semaine.',
            },
            {
                title: 'Objectif de depart',
                text: 'Devenir developpeur et construire des projets concrets.',
            },
        ],
    },
    present: {
        label: 'Ce qui me definit aujourd\'hui',
        years: 'Maintenant',
        items: [
            {
                title: 'Profil',
                text: `${profile.name}, passionne par le developpement et l\'amelioration continue.`,
            },
            {
                title: 'Activites principales',
                text: 'Je travaille sur des projets web, je renforce ma logique de programmation et je pratique la guitare.',
            },
            {
                title: 'Style de travail',
                text: 'Je privilegie les environnements calmes, le code clair et les solutions simples mais robustes.',
            },
            {
                title: 'Priorite actuelle',
                text: 'Consolider mes bases techniques et livrer des interfaces utiles et propres sans utiliser l\'IA.',
            },
        ],
    },
    future: {
        label: 'La direction que je vise',
        years: 'Prochaines etapes',
        items: [
            {
                title: 'Vision',
                text: 'Devenir un developpeur complet capable de construire des solutions de bout en bout.',
            },
            {
                title: 'Competences cibles',
                text: 'Approfondir la data, les reseaux, le cloud et l\'intelligence artificielle.',
            },
            {
                title: 'Impact recherche',
                text: 'Contribuer a des produits qui resolvent des problemes reels pour les utilisateurs.',
            },
            {
                title: 'Engagement personnel',
                text: 'Apprendre chaque jour avec discipline et constance.',
            },
        ],
    },
};

function getSelectedPeriod(key) {
    return infoByPeriod[key] || infoByPeriod.present;
}

function createInfoItem(item) {
    const wrapper = document.createElement('section');
    wrapper.className = 'info-item';

    const title = document.createElement('h2');
    title.textContent = item.title;

    const text = document.createElement('p');
    text.textContent = item.text;

    wrapper.append(title, text);
    return wrapper;
}

function renderInfo(periodKey) {
    const { infoContent, periodLabel } = elements;
    const selectedPeriod = getSelectedPeriod(periodKey);

    infoContent.classList.remove('is-changing');
    void infoContent.offsetWidth;
    infoContent.classList.add('is-changing');

    periodLabel.textContent = `${selectedPeriod.label} - ${selectedPeriod.years}`;
    infoContent.innerHTML = '';

    const fragment = document.createDocumentFragment();
    selectedPeriod.items.forEach((item) => {
        fragment.appendChild(createInfoItem(item));
    });

    infoContent.appendChild(fragment);

    window.setTimeout(() => {
        infoContent.classList.remove('is-changing');
    }, 360);
}

function updateOptionLabels() {
    const { timeframeSelect } = elements;

    Array.from(timeframeSelect.options).forEach((option) => {
        const period = getSelectedPeriod(option.value);
        option.textContent = `${option.textContent.split(' (')[0]} (${period.items.length})`;
    });
}

function startCitationRotation() {
    const { citationText, citationAuthor } = elements;

    if (!citationText || !citationAuthor || citations.length === 0) {
        return;
    }

    let citationIndex = 0;

    const renderCitation = (index) => {
        citationText.classList.remove('is-visible');
        citationAuthor.classList.remove('is-visible');

        window.setTimeout(() => {
            citationText.textContent = citations[index].text;
            citationAuthor.textContent = citations[index].author;
            citationText.classList.add('is-visible');
            citationAuthor.classList.add('is-visible');
        }, 120);
    };

    citationText.classList.add('is-visible');
    citationAuthor.classList.add('is-visible');

    window.setInterval(() => {
        citationIndex = (citationIndex + 1) % citations.length;
        renderCitation(citationIndex);
    }, 3000);
}

function init() {
    const { timeframeSelect, infoContent, periodLabel } = elements;

    if (!timeframeSelect || !infoContent || !periodLabel) {
        console.error('Missing required DOM elements for patrick page.');
        return;
    }

    updateOptionLabels();

    timeframeSelect.addEventListener('change', (event) => {
        renderInfo(event.target.value);
    });

    renderInfo(timeframeSelect.value);
    startCitationRotation();
}

init();
