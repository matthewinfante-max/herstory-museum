const exhibition = 'https://artsandculture.google.com/story/KAWxk5CtcXJIJw';

const artifacts = [
  {
    id: 1,
    title: 'First Lieutenant — Marking’s Guerrillas',
    date: '1943–1945',
    period: 'wartime',
    creator: 'Marking’s Guerrillas',
    type: 'Military roster',
    person: 'Lydia Villanueva-Arguilla',
    url: 'https://artsandculture.google.com/asset/first-lieutenant-marking-s-guerrillas/KwEmNZ5uuIyiYw?hl=en',
    image: 'assets/images/first-lieutenant.png',
    imageAlt: 'Scanned wartime roster listing Lydia Villanueva-Arguilla',
    description: 'A roster listing Lydia Villanueva-Arguilla, with her rank amended to First Lieutenant.',
    analysis: 'The roster is direct evidence of how the guerrilla organization documented Lydia’s participation. Its amendment also reminds us that military records can be revised.',
    limitations: 'A roster establishes a recorded rank but does not independently describe every mission or activity she performed.'
  },
  {
    id: 2,
    title: 'Colonel Yay — Recognized Guerrilla Unit',
    date: '27 November 1945',
    period: 'postwar',
    creator: 'PHILRYCOM',
    type: 'Military recognition record',
    person: 'Valeria “Yay” Panlilio',
    url: exhibition,
    image: 'assets/images/colonel-yay.png',
    imageAlt: 'PHILRYCOM recognition record for Yay Panlilio',
    description: 'A post-liberation roster documenting Yay Panlilio’s inclusion in a recognized guerrilla unit.',
    analysis: 'This official record reveals how women’s wartime roles were acknowledged through postwar military recognition processes.',
    limitations: 'Created after the war, it reflects an administrative recognition process rather than a contemporaneous battle account.'
  },
  {
    id: 3,
    title: 'Affidavit for Juanita Kagahastian',
    date: '3 December 1947',
    period: 'postwar',
    creator: 'George Caldwell',
    type: 'Sworn affidavit',
    person: 'Juanita Kagahastian',
    url: exhibition,
    image: 'assets/images/first-lieutenant.png',
    imageAlt: 'Representative archival document preview for wartime service records',
    description: 'Former U.S. Army captain George Caldwell attested to the wartime nursing service of Juanita Kagahastian.',
    analysis: 'The affidavit shows how veterans had to supply evidence of wartime work in pursuit of official benefits and recognition.',
    limitations: 'It is retrospective testimony, and should be compared with other records wherever possible.'
  },
  {
    id: 4,
    title: 'Forgotten Guerrilleras — Philippines Free Press',
    date: '12 October 1946',
    period: 'postwar',
    creator: 'Philippines Free Press',
    type: 'Magazine publication',
    person: 'Josefa R. Borromeo and Ana Omega',
    url: 'https://artsandculture.google.com/asset/forgotten-guerrilleras-philippines-free-press/YgGos3vJd_7c5w?hl=en',
    image: 'assets/images/forgotten-guerrilleras.png',
    imageAlt: 'Magazine page from Forgotten Guerrilleras',
    description: 'A postwar magazine article discussing women guerrillas and the struggle for recognition after liberation.',
    analysis: 'Journalistic accounts can show which forms of female resistance became publicly visible immediately after liberation.',
    limitations: 'Editorial selection, narrative framing, and publication date shape what this source can tell us.'
  },
  {
    id: 5,
    title: 'Mammy — Yay Panlilio',
    date: '1945–1951',
    period: 'postwar',
    creator: 'Photographer not identified in displayed metadata',
    type: 'Photograph (book reproduction)',
    person: 'Valeria “Yay” Panlilio and Marcos Agustin',
    url: 'https://artsandculture.google.com/asset/mammy/zAFlhK3OLRkZMw?hl=en',
    image: 'assets/images/colonel-yay.png',
    imageAlt: 'Related recognition record; not the Mammy photograph',
    description: 'The original linked item is a photograph of Yay Panlilio and Marcos Agustin. The preview here is a separate related military record, not that photograph.',
    analysis: 'The image documents how a resistance leader was visually represented and remembered in the immediate postwar period.',
    limitations: 'The archive dates the item broadly to 1945–1951; it should not be presented as a verified wartime photograph.'
  }
];

const timeline = [
  ['1941', 'War reaches the Philippines', 'Japanese attacks in December brought the Philippines into the Pacific War.'],
  ['1942', 'Occupation and underground resistance', 'Guerrilla movements developed, and women contributed through intelligence, leadership, nursing, and logistics.'],
  ['1943–1945', 'Lydia’s recorded service', 'The Marking’s Guerrillas roster records Lydia Villanueva-Arguilla’s First Lieutenant rank.'],
  ['1945', 'Liberation and recognition', 'Following liberation, official processes began to record and recognize wartime guerrilla service.'],
  ['1947', 'Nursing service documented', 'George Caldwell’s affidavit attested to Juanita Kagahastian’s wartime nursing work.'],
  ['1951', 'A memoir enters the record', 'Yay Panlilio’s autobiography The Crucible presented her account of guerrilla life.']
];

document.getElementById('timelineItems').innerHTML = timeline.map(([date, title, description]) => `
  <article class="event">
    <time>${date}</time>
    <h3>${title}</h3>
    <p>${description}</p>
  </article>
`).join('');

const grid = document.getElementById('artifactGrid');

function renderArtifacts(filter = 'all') {
  grid.innerHTML = artifacts
    .filter(a => filter === 'all' || a.period === filter)
    .map(a => `
      <article class="artifact">
        <div class="artifact-art">
          <img class="artifact-thumb" src="${a.image}" alt="${a.imageAlt}" loading="lazy">
        </div>
        <small>${a.type.toUpperCase()} · ${a.date}</small>
        <h3>${a.title}</h3>
        <p>${a.description}</p>
        <div class="artifact-links">
          <a class="view-link" href="${a.url}" target="_blank" rel="noopener">OPEN ORIGINAL SOURCE ↗</a>
          <button data-id="${a.id}">INSPECT OBJECT ↗</button>
        </div>
      </article>
    `).join('');

  grid.querySelectorAll('[data-id]').forEach(b =>
    b.addEventListener('click', () => openArtifact(Number(b.dataset.id)))
  );
}

renderArtifacts();

document.querySelectorAll('.filter').forEach(b =>
  b.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    renderArtifacts(b.dataset.filter);
  })
);

const modal = document.getElementById('modal');
let priorFocus = null;

function openArtifact(id) {
  const a = artifacts.find(x => x.id === id);
  priorFocus = document.activeElement;
  document.getElementById('modalTitle').textContent = a.title;
  document.getElementById('modalBody').innerHTML = `
    <img class="modal-image" src="${a.image}" alt="${a.imageAlt}">
    <p>${a.description}</p>
    <p><a href="${a.url}" target="_blank" rel="noopener">🖼 Open the original archival source ↗</a></p>
    <dl>
      <dt>Creator / provenance</dt><dd>${a.creator}</dd>
      <dt>Date</dt><dd>${a.date}</dd>
      <dt>Medium</dt><dd>${a.type}</dd>
      <dt>Subject</dt><dd>${a.person}</dd>
      <dt>Historical interpretation</dt><dd>${a.analysis}</dd>
      <dt>Credibility & limitations</dt><dd>${a.limitations}</dd>
    </dl>
    <a class="btn" href="${a.url}" target="_blank" rel="noopener noreferrer">VIEW ORIGINAL ARCHIVAL COLLECTION ↗</a>
    <p><small>Source credit: Filipinas Heritage Library and related archival repositories. Verify reuse permissions before republishing scans or photographs publicly.</small></p>
  `;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  document.getElementById('closeModal').focus();
}

function closeArtifact() {
  modal.hidden = true;
  document.body.style.overflow = '';
  priorFocus?.focus();
}

document.getElementById('closeModal').onclick = closeArtifact;
modal.addEventListener('click', e => { if (e.target === modal) closeArtifact(); });

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.hidden) closeArtifact();
  if (e.key === 'Tab' && !modal.hidden) {
    const f = [...modal.querySelectorAll('button, a[href]')];
    if (e.shiftKey && document.activeElement === f[0]) {
      e.preventDefault();
      f.at(-1).focus();
    } else if (!e.shiftKey && document.activeElement === f.at(-1)) {
      e.preventDefault();
      f[0].focus();
    }
  }
});

document.getElementById('menu').onclick = () => document.getElementById('nav').classList.toggle('open');
document.querySelectorAll('#nav a').forEach(a => a.onclick = () => document.getElementById('nav').classList.remove('open'));

const questions = [
  { q: 'Which document records Lydia Villanueva-Arguilla’s guerrilla rank?', opts: ['A wartime guerrilla roster', 'A modern textbook', 'A 1960s election ballot', 'A school enrollment record'], answer: 0, why: 'The Marking’s Guerrillas roster records her rank as First Lieutenant.' },
  { q: 'What role did Yay Panlilio perform?', opts: ['Only battlefield combat', 'Communications and guerrilla administration', 'Colonial governorship', 'Japanese military command'], answer: 1, why: 'Her documented work included reports, letters, advice, and care for the sick and wounded.' },
  { q: 'What does the 1947 Caldwell affidavit concern?', opts: ['A peace treaty', 'A school opening', 'Juanita Kagahastian’s nursing service', 'An election'], answer: 2, why: 'The affidavit attested to Kagahastian’s wartime service as a nurse.' },
  { q: 'Why should historians carefully evaluate postwar testimony?', opts: ['It is always false', 'It was created retrospectively and may reflect later interests', 'It cannot mention the war', 'It is always anonymous'], answer: 1, why: 'Retrospective accounts can provide valuable evidence, but context, memory, and purpose must be considered.' },
  { q: 'Which is the best approach to sharing archival material?', opts: ['Remove the archive credit', 'Invent missing dates', 'Ignore provenance', 'Cite the source and check reproduction rights'], answer: 3, why: 'Ethical public history requires accurate attribution, source verification, and respect for reuse permissions.' }
];

let qIndex = 0;
let score = 0;
let answered = false;
const quiz = document.getElementById('quizContent');

function drawQuiz() {
  if (qIndex >= questions.length) {
    quiz.innerHTML = `
      <p class="progress">EXHIBIT COMPLETE</p>
      <h3>Your score: ${score} / ${questions.length}</h3>
      <p>You have completed the museum knowledge check. Explore the archive again to deepen your understanding.</p>
      <button id="restart">RETAKE QUIZ ↗</button>
    `;
    document.getElementById('restart').onclick = () => { qIndex = 0; score = 0; drawQuiz(); };
    return;
  }

  answered = false;
  const q = questions[qIndex];
  quiz.innerHTML = `
    <p class="progress">QUESTION ${qIndex + 1} OF ${questions.length}</p>
    <h3>${q.q}</h3>
    <div class="quiz-options">
      ${q.opts.map((o, i) => `<button data-answer="${i}">${String.fromCharCode(65 + i)}. ${o}</button>`).join('')}
    </div>
    <p id="feedback" class="feedback" aria-live="polite"></p>
    <button id="next" hidden>${qIndex === questions.length - 1 ? 'SEE RESULTS' : 'NEXT QUESTION'} →</button>
  `;

  quiz.querySelectorAll('[data-answer]').forEach(b => b.onclick = () => {
    if (answered) return;
    answered = true;
    const choice = Number(b.dataset.answer);
    if (choice === q.answer) score++;

    quiz.querySelectorAll('[data-answer]').forEach(x => {
      x.disabled = true;
      if (Number(x.dataset.answer) === q.answer) x.classList.add('correct');
      else if (Number(x.dataset.answer) === choice) x.classList.add('wrong');
    });

    document.getElementById('feedback').textContent = (choice === q.answer ? 'Correct. ' : 'Not quite. ') + q.why;
    document.getElementById('next').hidden = false;
  });

  document.getElementById('next').onclick = () => { qIndex++; drawQuiz(); };
}

drawQuiz();


// The museum itself is fully local. Original archive citations intentionally point to
// their publishers' online pages; tell offline visitors why those links cannot open.
(() => {
  const notice = document.getElementById('offlineNotice');
  let hideNotice;
  document.querySelectorAll('a[href^="https://"], a[href^="http://"]').forEach(link => {
    link.title = 'Original external source — internet connection required';
  });

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="https://"], a[href^="http://"]');
    if (!link || navigator.onLine) return;
    event.preventDefault();
    notice.textContent = 'This is an original online archive link. The museum works offline, but an internet connection is needed to visit the external source.';
    notice.hidden = false;
    clearTimeout(hideNotice);
    hideNotice = setTimeout(() => { notice.hidden = true; }, 5500);
  });
})();
