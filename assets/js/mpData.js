const mpLinks = ['yearbook', 'fundraising', 'calendar']

const calendarItems = [
    {
        event: "Spiritwear sale starts",
        moreInfo: "Watch Wednesday folders for order forms or <a href='https://squareup.com/store/MtPilchuckPTA' target='_blank'>buy online</a>",
        dateTime: "Tue, Sept 3",
        anchorDate :"Sep 3 2019"
    },
    {
        event: "Open House",
        moreInfo: "Mt Pilchuck classrooms",
        dateTime: "Tue, Sept 3, 4 - 5pm",
        anchorDate :"Sep 3 2019"
    },
    {
        event: "Ice Cream Social and Information Fair",
        moreInfo: "Mt Pilchuck gym",
        dateTime: "Tue, Sept 3, 4:30  - 6 pm",
        anchorDate :"Sep 3 2019"
    },
    {
        event: "First Day of School (1st - 5th)",
        moreInfo: "Get bus information <a href='https://www.lkstevens.wednet.edu/Page/135'>here</a>",
        dateTime: "Wed, Sept 4",
        anchorDate :"Sep 4 2019"
    },
    {
        event: "Kindergarten First Day of School",
        moreInfo: "Get bus information <a href='https://www.lkstevens.wednet.edu/Page/135'>here</a>",
        dateTime: "Mon, Sept 9",
        anchorDate :"Sep 9 2019"
    },
    {
        event: "Fall Fundraiser starts",
        moreInfo: "Register your student to sell online <a href='www.supportourfundraisers.com' target='_blank'>here</a>",
        dateTime: "Wed, Sept 11",
        anchorDate :"Sep 11 2019"
    },
    {
        event: "PTA Meeting",
        moreInfo: "Mt Pilchuck library -- open to anyone (membership not required)",
        dateTime: "Wed, Sept 11, 4 - 5 pm",
        anchorDate :"Sep 11 2019"
    },
    {
        event: "Popcorn Friday",
        moreInfo: "Popcorn passes are just $5 for popcorn for your student for all year.  Order forms available in the office or <a href='https://squareup.com/store/MtPilchuckPTA' target='_blank'>buy online</a>.",
        dateTime: "Fri, Sept 13",
        anchorDate :"Sep 13 2019"
    },
    {
        event: "Spiritwear order deadline",
        moreInfo: "Watch Wednesday folders for order forms or <a href='https://squareup.com/store/MtPilchuckPTA' target='_blank'>buy online</a>",
        dateTime: "Fri, Sept 20",
        anchorDate :"Sep 20 2019"
    },
    {
        event: "Fall Fundraiser order deadline",
        moreInfo: "Register your student to sell online <a href='www.supportourfundraisers.com' target='_blank'>here</a>",
        dateTime: "Wed, Sept 25",
        anchorDate :"Sep 25 2019"
        },
        {
        event: "Math Curriculum Night",
        moreInfo: "",
        dateTime: "Tue, Oct 8, 6 - 7:45 pm",
        anchorDate :"Oct 8 2019"
        },
        {
        event: "PTA Meeting",
        moreInfo: "Mt Pilchuck library -- open to anyone (membership not required)",
        dateTime: "Wed, Oct 9, 4 - 5 pm",
        anchorDate :"Oct 9 2019"
        },
        {
        event: "No School",
        moreInfo: "",
        dateTime: "Fri, Oct 11",
        anchorDate :"Oct 11 2019"
        },
        {
        event: "Math Festival",
        moreInfo: "",
        dateTime: "Sat, Oct 12, 10 am - 1 pm",
        anchorDate :"Oct 12 2019"
        },
        {
        event: "Early Release / Conferences",
        moreInfo: "",
        dateTime: "Mon - Fri, Oct 22-26",
        anchorDate :"Oct 22 2019"
        },
        {
        event: "PTA Provided Teacher Dinner",
        moreInfo: "Please consider providing part of the dinner we provide for teachers.  Sign up coming soon.",
        dateTime: "Mon, Oct 22, food needed by 3:30 pm",
        anchorDate :"Oct 22 2019"
        },
        {
        event: "Family Fun Halloween Carnival",
        moreInfo: "Volunteers needed.  Send email to <a href='mailto:halloween-carnival@mtpilchuckpta.org'>halloween-carnival@mtpilchukpta.org</a> or signup coming soon.",
        dateTime: "Fri, Oct 25, 6:30 - 8 pm",
        anchorDate :"Oct 25 2019"
        },
        {
        event: "Veteran's Day Assemblies",
        moreInfo: "",
        dateTime: "Thu, Nov 7, 9:40 and 10:30 am",
        anchorDate :"Nov 7 2019"
        },
        {
        event: "No School",
        moreInfo: "",
        dateTime: "Mon, Nov 11",
        anchorDate :"Nov 11 2019"
        },
        {
        event: "PTA Meeting",
        moreInfo: "Mt Pilchuck library -- open to anyone (membership not required)",
        dateTime: "Wed, Nov 13 4 - 5 pm",
        anchorDate :"Nov 13 2019"
        },
        {
        event: "Popcorn Friday",
        moreInfo: "Popcorn passes are just $5 for popcorn for your student for all year.  Order forms available in the office or <a href='https://squareup.com/store/MtPilchuckPTA' target='_blank'>buy online</a>.",
        dateTime: "Fri, Nov 15",
        anchorDate :"Nov 15 2019"
        },
        {
        event: "Early Release",
        moreInfo: "",
        dateTime: "Wed, Nov 27",
        anchorDate :"Nov 27 2019"
        },
        {
        event: "No school",
        moreInfo: "",
        dateTime: "Thu-Fri, Nov 28-29",
        anchorDate :"Nov 28 2019"
        },
        {
        event: "PTA Meeting",
        moreInfo: "Mt Pilchuck library -- open to anyone (membership not required)",
        dateTime: "Wed, Dec 11",
        anchorDate :"Dec 11 2019"
        },
        {
        event: "Movie Day",
        moreInfo: "",
        dateTime: "Fri, Dec 20",
        anchorDate :"Dec 20 2019"
        },
        {
        event: "No School",
        moreInfo: "",
        dateTime: "Mon Dec 23 - Fri Jan 3",
        anchorDate :"Dec 20 2019"
        },
        {
        event: "Yearbook Cover Art Contest Kickoff",
        moreInfo: "Original student art should be turned into the office.  Art must be portrait orientation and include <b>2018-19</b> and <b>Mt Pilchuck Elementary School</b>. Student name should not on the BACK ONLY of the art.",
        dateTime: "Wed, Jan 8",
        anchorDate :"Jan 8 2020"
        },
        {
        event: "PTA Meeting",
        moreInfo: "Mt Pilchuck library -- open to anyone (membership not required)",
        dateTime: "Wed, Jan 8",
        anchorDate :"Jan 8 2020"
        },
        {
        event: "No School",
        moreInfo: "",
        dateTime: "Thu, Jan 9",
        anchorDate :"Jan 9 2020"
        },
        {
        event: "No School",
        moreInfo: "",
        dateTime: "Mon, Jan 20",
        anchorDate :"Jan 20 2020"
        },
        {
        event: "Yearbook Cover Art Contest Entries Due",
        moreInfo: "Original student art should be turned into the office.  Art must be portrait orientation and include <b>2018-19</b> and <b>Mt Pilchuck Elementary School</b>. Student name should not on the BACK ONLY of the art.",
        dateTime: "Fri, Jan 24",
        anchorDate :"Jan 24 2020"
        },
        {
        event: "Popcorn Friday",
        moreInfo: "Popcorn passes are just $5 for popcorn for your student for all year.  Order forms available in the office or <a href='https://squareup.com/store/MtPilchuckPTA' target='_blank'>buy online</a>.",
        dateTime: "Fri, Jan 24",
        anchorDate :"Jan 24 2020"
        },
        {
        event: "No School",
        moreInfo: "",
        dateTime: "Mon, Jan 27",
        anchorDate :"Jan 27 2020"
        },
        {
        event: "Silvergraphics Art Due",
        moreInfo: "",
        dateTime: "Tue, Feb 4",
        anchorDate :"Feb 4 2020"
        },
        {
        event: "PTA Meeting",
        moreInfo: "Mt Pilchuck library -- open to anyone (membership not required)",
        dateTime: "Wed, Feb 12",
        anchorDate :"Feb 12 2020"
        },
        {
        event: "Early Release / Conferences",
        moreInfo: "",
        dateTime: "Mon - Fri, Feb 24 - 28",
        anchorDate :"Feb 24 2020"
        },
        {
        event: "PTA Provided Teacher Dinner",
        moreInfo: "Please consider providing part of the dinner we provide for teachers.  Sign up coming soon.",
        dateTime: "Mon Feb 24, food needed by 3:30 pm",
        anchorDate :"Feb 24 2020"
        },
        {
        event: "Silvergraphics Order kickoff",
        moreInfo: "Online ordering coming soon.",
        dateTime: "Wed, Feb 26",
        anchorDate :"Feb 26 2020"
        },
        {
        event: "PTA Meeting",
        moreInfo: "Mt Pilchuck library -- open to anyone (membership not required)",
        dateTime: "Wed, Mar 11",
        anchorDate :"Mar 11 2020"
        },
        {
        event: "Silvergraphics Orders Due",
        moreInfo: "Online ordering coming soon.",
        dateTime: "Wed, Mar 18",
        anchorDate :"Mar 11 2020"
        },
        {
        event: "Annie Performance",
        moreInfo: "Buy tickets online.",
        dateTime: "Fri - Sat, Mar 20 - 21, time tba",
        anchorDate :"Mar 20 2020"
        },
        {
        event: "No School",
        moreInfo: "",
        dateTime: "Mon - Fri, Mar 30 - Apr 3",
        anchorDate :"Mar 30 2020"
        },
        {
        event: "Silvergraphics Order Delivery",
        moreInfo: "Late orders accepted, but do not have free shipping.  Online ordering coming soon.",
        dateTime: "Wed, Apr 8",
        anchorDate :"Apr 8 2020"
        },
        {
        event: "PTA Meeting",
        moreInfo: "Mt Pilchuck library -- open to anyone (membership not required)",
        dateTime: "Wed, Apr 8",
        anchorDate :"Apr 8 2020"
        },
        {
        event: "Popcorn Friday",
        moreInfo: "Popcorn passes are just $5 for popcorn for your student for all year.  Order forms available in the office or <a href='https://squareup.com/store/MtPilchuckPTA' target='_blank'>buy online</a>.",
        dateTime: "Fri, Apr 10",
        anchorDate :"Apr 10 2020"
        },
        {
        event: "Yearbook Order kickoff",
        moreInfo: "Online ordering coming soon.",
        dateTime: "Wed, Apr 15",
        anchorDate :"Apr 15 2020"
        },
        {
        event: "Art Walk",
        moreInfo: "Volunteers needed.  Send email to <a href='mailto:art-walk@mtpilchuckpta.org'>art-walk@mtpilchuckpta.org</a> or online signup coming soon.",
        dateTime: "Fri, Apr 17, 6 - 8 pm",
        anchorDate :"Apr 17 2020"
        },
        {
        event: "APEX Lessons",
        moreInfo: "",
        dateTime: "Mon - Fri, Apr 20 - 30",
        anchorDate :"Apr 20 2020"
        },
        {
        event: "APEX Fun Run",
        moreInfo: "",
        dateTime: "Fri, May 1",
        anchorDate :"May 1 2020"
        },
        {
        event: "Staff/Teacher Appreciation",
        moreInfo: "",
        dateTime: "Mon - Fri, May 4 - 8",
        anchorDate :"May 4 2020"
        },
        {
        event: "PTA Meeting",
        moreInfo: "Mt Pilchuck library -- open to anyone (membership not required)",
        dateTime: "Wed, May 13, 4 - 5 pm",
        anchorDate :"May 13 2020"
        },
        {
        event: "Yearbook sale opens",
        moreInfo: "Click <a href='http://www.mtpilchuckpta.org#yearbook'>here</a> for more information about yearbook or <a href='https://forms.gle/7gQiGukSqzy76PjW6' target='_blank'>here</a> to submit your order form.",
        dateTime: "Fri, May 15",
        anchorDate :"May 15 2020"
        },
        {
        event: "No School",
        moreInfo: "",
        dateTime: "Mon, May 25",
        anchorDate :"May 25 2020"
        },
        {
        event: "Last day to order a yearbook",
        moreInfo: "",
        dateTime: "Thu, Jun 4",
        anchorDate :"Jun 4 2020"
        },
        {
        event: "Online PTA Meeting",
        moreInfo: "Join us <href='http://www.mtpilchuckpta.org/online-meeting' target='_blank'>here</a> -- open to anyone (membership not required)",
        dateTime: "Wed, Jun 10 4 - 5 pm",
        anchorDate :"Jun 10 2020"
        },
]



