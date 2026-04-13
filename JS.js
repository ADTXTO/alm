const leftItems = document.querySelectorAll('.left-item');
const rightItems = document.querySelectorAll('.right-item');

function activate(target) {
    // Ativar itens da esquerda
    leftItems.forEach(i =>
        i.classList.toggle('active', i.dataset.target === target)
    );

    // Ativar itens da direita
    rightItems.forEach(i =>
        i.classList.toggle('active', i.dataset.target === target)
    );

    // Scroll para a secção
    const section = document.getElementById(target);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
}

leftItems.forEach(i =>
    i.addEventListener('click', () => activate(i.dataset.target))
);

rightItems.forEach(i =>
    i.addEventListener('click', () => activate(i.dataset.target))
);