onload = () => {
    generateCalendarTable();
    generateLinks();
    if (window.location.hash.startsWith('#')) {
        const jumpTo = window.location.hash.split('#')[1];
        displaySection(jumpTo);
    }
    else {
        displaySection('');     // hides all extra information
    }
}

const generateLinks = () => {
    mpLinks.forEach(link => {
        const newMenuItem = `<li><a href=javascript:displaySection("${link}")>${capFirst(link)}</a></l>`
        document.querySelector('#quickLinks').innerHTML += newMenuItem; 
    });
}

// displays extra information for named section
// hides all other information for sections other than named section
const displaySection = (sectionName) => {
    const sections = document.querySelectorAll('.extraSection');
    sections.forEach(section => {
        console.log(`section has id: ${section.id}`)
        section.style.display = "none";
    });
    const section = document.getElementById(`${sectionName}Section`);
    if (section) {
        section.style.display = 'block';
        section.scrollIntoView();    
    }
    else {
       document.documentElement.scrollTop = 0;
    }
}

const generateCalendarTable = () => {
    var later = new Date((new Date().getTime() + (new Date("July 31, 2019")).getTime() - (new Date("July 1, 2019")).getTime()));
    var currentDate = new Date();
    
    var cal = calendarItems.sort(function (a, b) {
        return new Date(a.anchorDate) < new Date(b.anchorDate) ? -1:1;
    });
    cal = cal.filter(function(row){
        return new Date(row.anchorDate) >= currentDate && new Date(row.anchorDate) < later;
    });
    var html = '<thead><tr><th>When</th><th>What</th><th>Where</th></tr></thead><tbody>';
    for (var i = 0; i < cal.length; i++) {
        html += '<tr id="' + new Date(cal[i].anchorDate) + '">'
        html += '<td width="25%">' + cal[i].dateTime + '</td>';
        html += '<td width="25%">' + cal[i].event + '</td>';
        html += '<td width="50%">' + cal[i].moreInfo + '</td>';
        html += '</tr>\n';
    }
    html += '</tbody>';
    document.querySelector('#eventsTable').innerHTML = html;
}

const capFirst = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);
