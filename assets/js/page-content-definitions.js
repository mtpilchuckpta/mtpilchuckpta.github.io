// ==============================================================================
//         ENTER CATEGORY INFORMATION HERE
//      
// Recommendation is to create and keep data and html files for every category
// 
// DO NOT DELETE CATEGORY DATA
// name:  this needs to be coordinated with the file names in /assets/content
//            (e.g. name=art, files = art-overview.html, art-details.html)
// displayName:  Name as displayed on the webpage
// isActive:  indicates whether or not to display this category on the site at all
//            if set to false, other values are meaningless
// isHighlight:  indicates whether or not to display a highlight box for this category
//               if set to true, a corresponding name-overview.html file must exist in /assets/content
// icon:  contains an fa-icon to display in the highlights box
//        not needed is isHighlight is false
//        will be panther paw if none selected
// externalLink:  if set, controls action when menu item is selected (no details will be displayed)
//                do NOT set if there is a name-details.html file in /assets/content/ that should be displayed

const enteredSiteCategoryData = [
    {
        name: 'membership',
        displayName: 'Join',
        isActive: true,
        isHighlight: true,
        icon: 'fa-group',
        externalLink: '',
    },
    {
        name: 'yearbook',
        isActive: true, 
        isHighlight: true,
        displayName: 'Yearbook',
        icon: 'fa-group'
    },
    // {
    //     name: 'fundraising',
    //     isActive: true, 
    //     isHighlight: false,
    //     displayName: 'Support',
    //     icon: 'fa-group'
    // },
    // {
    //     name: 'volunteer',
    //     isActive: true, 
    //     isHighlight: true,
    //     displayName: 'Volunteer',
    //     icon: 'fa-group'
    // },
    // {
    //     name: 'art',
    //     isActive: true, 
    //     isHighlight: false,
    //     displayName: 'Art',
    //     icon: 'fa-group'
    // },
    // {
    //     name: 'calendar',
    //     isActive: true, 
    //     isHighlight: true,
    //     displayName: 'Calendar',
    //     icon: 'fa-group'
    // },
]


// ==============  END ENTER CATEGORY INFORMATION ========


const codeGenerationData = enteredSiteCategoryData.map(category => ({
    ...category,
    linkIsExternal: Boolean(category.externalLink),
    link: Boolean(category.externalLink) ? 
        category.externalLink: 
        `javascript:loadDetails(${category.name});`,
}))
