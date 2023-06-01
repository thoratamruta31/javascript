let professor = {
    name: "priyanka",
    age: "28",
    education: "computer engineering",
    gender: "female",
    height: "5.5feet",
    experience : "14years",
    
    certificates: [
      "Hacker Rank Participation",
      "Certificate In IFE Cource",
      "Certificate In Adv Programming",
      "Oracle Certified",
    ],
  
    degree: {
      engineering: "CSE",
      PHD: "Adv Computing",
    },
  
  
    
  
    walk: function (totalwalk, totalwalk2) {
      console.log(`4] teacher toatal degree are : ${totalwalk},${totalwalk2}`);
      
      console.log(`--------------------------------------------------------------------------`);
    },
  };
  console.log(`1] properties of  professor object ==>`, professor);
  console.log(`--------------------------------------------------------------------------`);
  console.log(`2] properties of degree object==>`, professor.degree);
  console.log(`--------------------------------------------------------------------------`);
  console.log(`3] Certificates==>`,professor.certificates);
  console.log(`--------------------------------------------------------------------------`);
  professor.walk(" engineering : CSE", " PHD : Adv Computing");
  
  console.log(`5] Total Experience ====>`,professor.experience);
  console.log(`--------------------------------------------------------------------------`);
  professor.gender = "male";
    
    console.log(`6] Modify Professor Property gender female : ${professor.gender}`);
    console.log(professor);
    console.log(`--------------------------------------------------------------------------`);
    let arrayLength1 = professor.certificates.length;
  const lastElement = professor.certificates[arrayLength1-1]
  console.log(`7] Last Element===>${lastElement}`);