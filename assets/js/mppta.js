onload = () => {
    insertWelcomeText();
    generateMenuItems(codeGenerationData)
    Promise.all(getHighlightsHtml(codeGenerationData)).then(returnedHtmls => {
        document.querySelector('#highlights').innerHTML = returnedHtmls.join('\n')
        Promise.resolve();
    }).then(() => {
        if (window.location.hash.startsWith('#')) {
            const jumpTo = window.location.hash.split('#')[1];
            loadDetails(jumpTo);
        }
        else {
            noDetails();     // hides all extra information
        }
    })    
}

const insertWelcomeText = () => {
	fetchHtmlFromFile(`/assets/content/page-content/welcome-text.html`).then(html => {
		document.querySelector('#welcome-text') .innerHTML = html;
	});
}

const generateMenuItems = (data) => {
	data.forEach(category => {
		const newMenuItem = `<li><a href="${category.link}" ${category.linkIsExternal? 'target="_blank"': ''}}>${category.displayName}</a></l>`
    	document.querySelector('#quickLinks').innerHTML += newMenuItem; 
	})
}

const getHighlightsHtml = (data) => {
	const promises = data
		.filter(category => category.isHighlight)
		.map(highlightCategory => {
			return fetchHtmlFromFile(`/assets/content/category-highlights/${highlightCategory.name}-highlight.html`)
			  .then(html => generateHighlight(highlightCategory, html))
		})
	return promises;	
}

const generateHighlight = (data, highlightHtml) => {
	const missingMessage = `<!-- Expected but did not find well-formed ${data.name}-highlight.html file in assets/content. 
		If ${data.name} should be in a highlight square, add or check /assets/content/${data.name}-highlight.html -->`
	
	const isExternalLink = Boolean(data.externalLink)
	const link = isExternalLink ? data.externalLink: `javascript:loadDetails('${data.name}');`

	return `<section id="${data.name}">
  <div class="content">
    <header>
	  <a  href="${link}"
	      ${Boolean(data.icon) ? 'class="icon ' + data.icon + '" ': ''}
		  target="${isExternalLink? '_blank': '_self'}">
		<h3>${data.displayName}</h3>
      </a>
    </header>
	<p>
	${highlightHtml? highlightHtml: missingMessage}
	</p>
  </div>
</section>
` }


const loadDetails = (categoryName) => {
	const detailsBlock = document.querySelector('#detailsBlock') 
    const filename = `/assets/content/category-details/${categoryName}-details.html`;

	fetchHtmlFromFile(filename).then(htmlFromFile => {
		detailsBlock.innerHTML = `
            <section class="wrapper">
                <div class="inner">
                    <header class="special">
                    ${htmlFromFile}
                    </header>
                </div>
            </section>				
            `
		detailsBlock.style.display = 'block';
		detailsBlock.scrollIntoView();
	}).catch(err => {
        console.log(`error loading ${filename}: ${err}`)
        return noDetails();
    });
}

const noDetails = () => {
	detailsBlock.style.display = 'none'
	document.documentElement.scrollTop = 0;
	detailsBlock.innerHTML = '';
	return;
}

