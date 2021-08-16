onload = () => {
    generateMenuItems(codeGenerationData)
    Promise.all(getHighlightsHtml(enteredSiteCategoryData)).then(returnedHtmls => {
        document.querySelector('#highlights').innerHTML = returnedHtmls.join('\n')    
    })
    //generateMenuLinks();
    //insertSectionOverviews();
    //generateCalendarTable();
    //generateArtLessonTable();
    
    if (window.location.hash.startsWith('#')) {
        const jumpTo = window.location.hash.split('#')[1];
        displaySection(jumpTo);
    }
    else {
        displaySection('');     // hides all extra information
    }
    
}

const generateMenuLinks = () => {
    sections.filter(section => section.isActive).forEach(section => {
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

const showEmailForm = () => {
	const emailModal = document.getElementById("emailForm");
	// emailModal.style.position = "fixed";
// 	emailModal.style.zIndex = 1;
// 	emailModal.left = 0;
// 	emailModal.top = 0;
// 	emailModal.height="100%";
// 	emailModal.width="100%";
	
	emailModal.style.display = "block";
	
	document.getElementsByClassName("closeEmailForm").onclick = () => {
		emailModal.style.display = "none";
	}
}

const generateCalendarTable = () => {
    const later = new Date((new Date().getTime() + (new Date("July 31, 2019")).getTime() - (new Date("July 1, 2019")).getTime()));  // one month from now
    const currentDate = new Date();
    
    const cal = calendarItems.sort(function (a, b) {
        return new Date(a.anchorDate) < new Date(b.anchorDate) ? -1:1;
    });
    cal = cal.filter(function(row){
        return new Date(row.anchorDate) >= currentDate && new Date(row.anchorDate) < later;
    });
    const html = '<thead><tr><th>When</th><th>What</th><th>Where</th></tr></thead><tbody>';
    for (let i = 0; i < cal.length; i++) {
        html += '<tr id="' + new Date(cal[i].anchorDate) + '">'
        html += '<td width="25%">' + cal[i].dateTime + '</td>';
        html += '<td width="25%">' + cal[i].event + '</td>';
        html += '<td width="50%">' + cal[i].moreInfo + '</td>';
        html += '</tr>\n';
    }
    html += '</tbody>';
    document.querySelector('#eventsTable').innerHTML = html;
}

const loadArtLessonData = (url) => new Promise((resolve, reject) => {
    str = `ActiveOn,Order,Name,URL,Video
    10/05/20,-14,Easy Landscape Drawing,https://www.youtube.com/watch?v=5lrBaL-rCLw,TRUE
    10/12/20,-13,Monster,https://www.youtube.com/watch?v=d-WKtCtxqGo,TRUE
    10/19/20,-12,Simple Pumpkin,https://www.youtube.com/watch?v=mAgDCbeftrc,TRUE
    10/26/20,-11,Spider & Web,https://www.youtube.com/watch?v=5snySq4FO6E,TRUE
    11/02/20,-10,Easy Candy Drawing,https://www.youtube.com/watch?v=AiWuZOTAXCA,TRUE
    11/09/20,-9,Leaf Collage,https://www.youtube.com/watch?v=2vnFBwbw-O0,TRUE
    11/16/20,-8,Turkey,https://www.youtube.com/watch?v=M9oNxlVdJN8,TRUE
    11/23/20,-7,Multiperspective Collage,https://www.youtube.com/watch?v=XQW0V8EBmz8,TRUE
    11/30/20,-6,Grinch 1,https://www.youtube.com/watch?v=3wJyoL1Oup8,TRUE
    12/04/20,-5,Snoopy Wreath,https://www.youtube.com/watch?v=3ILnz02IbBU,TRUE
    12/07/20,-4,Grinch 2,https://www.youtube.com/watch?v=YupRAaqdDGM,TRUE
    12/14/20,-3,Snowman,https://www.youtube.com/watch?v=9KxhueFM50s,TRUE
    12/11/20,-2,Snowman Snapshots POV,https://www.youtube.com/watch?v=_nK4XTnjaUA,TRUE
    12/17/20,-1,Catching Snowflakes,https://www.youtube.com/watch?v=C7IiUjM-v1Y,TRUE
    12/21/20,0,Crazy Hat Santa,https://www.youtube.com/watch?v=zwwEp9HXCa0,TRUE
    01/04/21,1,Easy Picasso,https://www.youtube.com/watch?v=y2sekKDuGkk,TRUE
    01/08/21,1,Kangaroo,images/art-lessons/kangaroo.pdf,FALSE
    01/11/21,6,Martin Luther King Jr,images/art-lessons/martin-luther-king-jr.pdf,FALSE
    01/15/21,6,Jumping Frog,images/art-lessons/jumping-frog.pdf,FALSE
    01/18/21,7,Capitol Building,images/art-lessons/capitol-building.pdf,FALSE
    01/21/21,8,Sitting Bunny,images/art-lessons/sitting-bunny.pdf,FALSE
    01/25/21,9,Giraffe Face,images/art-lessons/giraffe-face.pdf,FALSE
    01/28/21,10,Goose,images/art-lessons/goose.pdf,FALSE
    01/31/21,18,Road,images/art-lessons/road.pdf,FALSE
    02/04/21,21,Snake,images/art-lessons/snake.pdf,FALSE
    02/07/21,24,Easy Turtle,images/art-lessons/easy-turtle.pdf,FALSE
    02/11/21,28,Asian Building,images/art-lessons/asian-building.pdf,FALSE
    02/14/21,29,Indri Lemur,images/art-lessons/indri-lemur.pdf,FALSE
    02/18/21,33,Corgi Dog,images/art-lessons/corgi-dog.pdf,FALSE
    02/21/21,35,Dump Truck,images/art-lessons/dump-truck.pdf,FALSE
    02/25/21,42,King Tut,images/art-lessons/king-tut.pdf,FALSE
    02/28/21,43,Bird On A Cat,images/art-lessons/bird-on-a-cat.pdf,FALSE
    03/04/21,45,Flying Dragon,images/art-lessons/flying-dragon.pdf,FALSE
    03/08/21,46,Monkey,images/art-lessons/monkey.pdf,FALSE
    03/11/21,47,Leprechaun,images/art-lessons/leprechaun.pdf,FALSE
    03/14/21,48,Country House,images/art-lessons/country-house.pdf,FALSE
    03/18/21,51,Happy Pig,images/art-lessons/happy-pig.pdf,FALSE
    03/21/21,52,Gorilla Face,images/art-lessons/gorilla-face.pdf,FALSE
    03/25/21,54,Baby Giraffe,images/art-lessons/baby-giraffe.pdf,FALSE
    03/28/21,59,Bee,images/art-lessons/bee.pdf,FALSE
    04/01/21,62,Pterodactyl,images/art-lessons/pterodactyl.pdf,FALSE
    04/04/21,63,Running Bunny,images/art-lessons/running-bunny.pdf,FALSE
    04/08/21,68,Hippo Head,images/art-lessons/hippo-head.pdf,FALSE
    04/11/21,68,Island Lighthouse,images/art-lessons/island-lighthouse.pdf,FALSE
    04/15/21,71,Ballerina,images/art-lessons/ballerina.pdf,FALSE
    04/18/21,79,Amsterdam Buildings,images/art-lessons/amsterdam-buildings.pdf,FALSE
    04/22/21,83,Chick,images/art-lessons/chick.pdf,FALSE
    04/25/21,83,Airplane,images/art-lessons/airplane.pdf,FALSE
    04/29/21,84,Tree,images/art-lessons/tree.pdf,FALSE
    05/02/21,85,House Boat,images/art-lessons/house-boat.pdf,FALSE
    05/06/21,86,Swan,images/art-lessons/swan.pdf,FALSE
    05/09/21,89,Storybook Bear,images/art-lessons/storybook-bear.pdf,FALSE
    05/13/21,89,Dog With A Bone,images/art-lessons/dog-with-a-bone.pdf,FALSE
    05/16/21,94,Tugboat,images/art-lessons/tugboat.pdf,FALSE
    05/20/21,99,Flamingo Heads,images/art-lessons/flamingo-heads.pdf,FALSE
    05/23/21,104,Scarecrow Face,images/art-lessons/scarecrow-face.pdf,FALSE
    05/27/21,112,Storybook Bunny,images/art-lessons/storybook-bunny.pdf,FALSE
    05/31/21,115,Charmander Pokemon,images/art-lessons/charmander-pokemon.pdf,FALSE
    06/03/21,116,Koi Fish,images/art-lessons/koi-fish.pdf,FALSE
    06/07/21,118,Dragon With A Tail,images/art-lessons/dragon-with-a-tail.pdf,FALSE
    06/10/21,118,Lakeside Landscape,images/art-lessons/lakeside-landscape.pdf,FALSE
    06/14/21,129,Python,images/art-lessons/python.pdf,FALSE
    06/17/21,129,Velociraptor Dinosaur,images/art-lessons/velociraptor-dinosaur.pdf,FALSE
    06/21/21,130,Edward Hopper Landscape,images/art-lessons/edward-hopper-landscape.pdf,FALSE
    06/24/21,141,Apples,images/art-lessons/apples.pdf,FALSE
    06/28/21,142,Kangaroo And Baby,images/art-lessons/kangaroo-and-baby.pdf,FALSE
    07/01/21,146,Elephant,images/art-lessons/elephant.pdf,FALSE
    07/05/21,146,Grumpy Cat,images/art-lessons/grumpy-cat.pdf,FALSE`;
    resolve(str);
    // const xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = () => {
    //     if (this.readyState == 4) {
    //         if (this.status == 200) {
    //             resolve(xhttp.responseText);
    //         }
    //         else {
    //             reject(`response status ${this.status} in loadArtLessonData`);
    //         }
    //     }
    // };
    // xhttp.ontimeout = function (e) {
    //     reject('request timeout in loadArtLessonData');
    //   };
    // xhttp.open("GET", url, true);
    // xhttp.send();
});
let temp;
const generateArtLessonTable = () => {
    loadArtLessonData('/assets/js/art-lessons-data.csv').then(rawData => {
        if (!rawData) {
            reject(`art-lessons-data.csv is empty`);
        }const fileRows = rawData.split('\n');
        if (fileRows.length < 2) {
            reject(`art-lessons-data.csv does not contain parseable data.  Contents: ${JSON.stringify(rawData, null, 2)}`);
        }
        const dataFields = fileRows[0].split(',').map(field => field.trim());
        fileRows.shift();
        const lessonData = fileRows.map((row, index) => {
            console.log(`row[${index}] = ${JSON.stringify(row)}`)
            const lesson = {};
            dataFields.forEach((field, index) => {
                console.log(`index ${index}`)
                lesson[field] = row.split(',')[index].trim();
            });
            return lesson;
        })
        console.log(`Lesson data: ${JSON.stringify(lessonData, null, 2)}`)
        temp = Object.assign(lessonData);
        return lessonData;
    }).then(lessonData => {
        //fields: ActiveOn, Order, Name, URL, Video
        const tableRows = lessonData
            .sort((last, cur) =>  new Date(cur.ActiveOn) - new Date(last.ActiveOn))
            .filter(lesson => {
                return (new Date(lesson.ActiveOn) < Date.now())
            })
            .map(lesson => `
                <tr>
                    <td>${lesson.ActiveOn}</td>
                    <td><a href="${lesson.URL}" target="_blank">${lesson.Name}${lesson.Video === 'TRUE'?' (video)':''}</a></td>
                    <td class="artLessonUrl" style="display:none;"><a href="${lesson.URL}" target="_blank">${lesson.URL}</a></td>
                </tr>`);
        
        document.querySelector('#artLessonTableBody').innerHTML = tableRows.join('\n');
    }).catch(err => {
        console.log(err);
        alert(`We're having trouble loading this data right now. Please try again later, or contact webmaster@mtpilchuckpta.org for assistance.`);
        return;
    });
}

const capFirst = (str) => str.slice(0, 1).toUpperCase() + str.slice(1);
