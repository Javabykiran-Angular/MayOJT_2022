//Array of Object
var arrObj = [
    {
        id: 9,
        fname: "Sumit",
        lname: "Raokhande",
        country: {
            cid: 1,
            cname: "India"
        },
        month: ["Jan", "May", "Dec"],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 45
            },
            {
                subj: "M3",
                marks: 55
            }
        ]
    },
    {
        id: 6,
        fname: "Kiran",
        lname: "Raokhande",
        country: {
            cid: 2,
            cname: "Japan"
        },
        month: ["Feb", "March", "Aug"],
        result: [
            {
                subj: "M1",
                marks: 45
            },
            {
                subj: "M2",
                marks: 55
            },
            {
                subj: "M3",
                marks: 65
            }
        ]
    },
    {
        id: 3,
        fname: "Spruha",
        lname: "Raokhande",
        country: {
            cid: 3,
            cname: "US"
        },
        month: ["April", "July", "Sept"],
        result: [
            {
                subj: "M1",
                marks: 55
            },
            {
                subj: "M2",
                marks: 75
            },
            {
                subj: "M3",
                marks: 65
            }
        ]
    }
];
for (var i = 0; i < arrObj.length; i++) {
    console.log("\n      ID         :: ".concat(arrObj[i].id, "\n      First Name :: ").concat(arrObj[i].fname, "\n      Last Name  :: ").concat(arrObj[i].lname, "\n    Country Name :: ").concat(arrObj[i].country.cname, "  \n      Month      :: ").concat(arrObj[i].month.join("  "), "\n      -----------Result---------------------\n  "));
    for (var j = 0; j < arrObj[i].result.length; j++) {
        console.log("\n          Subject :: ".concat(arrObj[i].result[j].subj, "\n          Marks   :: ").concat(arrObj[i].result[j].marks, "\n    "));
    }
}
