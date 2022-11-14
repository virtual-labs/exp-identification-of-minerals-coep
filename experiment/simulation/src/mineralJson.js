tempMasterJson = {};
var masterJsonArr = [];
var tempQuestionArr = [];
var masterJson = {};

//First mineral
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Reddish Purple",
	"wrongAns1": "Gray",
	"wrongAns2": "White",
	"wrongAns3": "Purple"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Red",
	"correctAns": "Colourless (harder than the streak plate)",
	"wrongAns2": "Light blue",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None - typically breaks with a conchoidal fracture",
	"wrongAns1": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6",
	"wrongAns3": "5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.6-2.7",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "Ca<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "Opaque, Translucent, Transparent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "None of these"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 1,
	"originalName": "Amethyst",
	"dummyName": "mineral1",
	"src": "images/AMETHYST.jpg",
	"src1": "images/AMETHYST1.jpg",
	"src2": "images/AMETHYST2.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Reddish Purple",
	"streak": "Colourless (harder than the streak plate)",
	"luster": "Vitreous",
	"mohs_Hardness": "7",
	"cleavage": "None - typically breaks with a conchoidal fracture",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.6 to 2.7",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": " Uses Faceted stones, cabochons, beads, tumbled stones, ornamental objects.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Second mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Phyllosilicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Silicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Usually white, colorless",
	"wrongAns1": "Gray",
	"wrongAns2": "Yellowish white",
	"wrongAns3": "Silver"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Red",
	"correctAns": "White",
	"wrongAns2": "Light blue",
	"wrongAns3": "Yellow"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous; pearly",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect on (001)",
	"wrongAns1": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "None"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "4.5-5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6-7",
	"wrongAns3": "5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.33-2.37",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.8"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "KCa<sub>4</sub>(Si<sub>4</sub>O<sub>10</sub>)2F.8(H<sub>2</sub>O)",
	"wrongAns1": "KCa<sub>4</sub>BaSO<sub>4</sub>H<sub>2</sub>O",
	"wrongAns2": "Ca<sub>2</sub>SiO<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "Opaque, Translucent, Transparent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "None of these"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 2,
	"originalName": "Amophyllite",
	"dummyName": "mineral2",
	"src": "images/Amophyllite1.jpg",
	"src1": "images/Amophyllite2.jpg",
	"src2": "images/Amophyllite3.jpg",
	"chemical_Classification": "Phyllosilicate",
	"colour": "Usually white, colorless",
	"streak": "White",
	"luster": "Vitreous; pearly",
	"mohs_Hardness": "4.5-5",
	"cleavage": "Perfect on (001)",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.33-2.37",
	"chemical_Composition": "KCa<sub>4</sub>(Si<sub>4</sub>O<sub>10</sub>)2F.8(H<sub>2</sub>O)",
	"specialProperties": " Exfoliation of apophyllite is also possible by treating it with acids or simply by rubbing it. These minerals are typically found as secondary minerals in vesicles in basalt or other volcanic rocks.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Third mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Red to Brown",
	"correctAns": "Brown to Yellowish",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous",
	"correctAns": "Silky",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Prismatic",
	"wrongAns1": "None - typically breaks with a conchoidal fracture",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "2.5-6.0",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "3.2-3.3",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "Mg<sub>3</sub>Si<sub>2</sub>O<sub>5</sub>(OH)<sub>4</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 3,
	"originalName": "Asbestos",
	"dummyName": "mineral3",
	"src": "images/ASBESTOS.jpg",
	"src1": "images/ASBESTOS1.jpg",
	"src2": "images/ASBESTOS2.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Brown to yellowish",
	"streak": "White",
	"luster": "Silky",
	"mohs_Hardness": "2.5-6.0",
	"cleavage": "Prismatic",
	"diaphaneity": "NA",
	"gravity": "3.2-3.3",
	"chemical_Composition": "Mg<sub>3</sub>Si<sub>2</sub>O<sub>5</sub>(OH)<sub>4</sub>",
	"specialProperties": "Other properties of asbestos that " +
		"made it so commercially desirable include its" +
		" wear and friction characteristics, its tensile" +
		" strength, its heat, electrical and sound insulation " +
		"capabilities, and its adsorption capacity.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourth mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Carbonite",
	"wrongAns1": "Silicate",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Dark to pale blue",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Brown to Yellowish"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"correctAns": "Light blue",
	"wrongAns1": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"correctAns": "Vitreous",
	"wrongAns1": "Silky",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};

tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect on {011}, fair on {100}, poor on {110}",
	"wrongAns1": "None - typically breaks with a conchoidal fracture",
	"wrongAns2": "Prismatic",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "3.5-4.0",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "3.77",
	"wrongAns1": "2.5-2.9",
	"wrongAns2": "4.3-5",
	"wrongAns3": "3.2-3.3"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque, Translucent, Transparent",
	"wrongAns1": "None",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);
masterJson = {
	"mineralId": 4,
	"originalName": "Azurite",
	"dummyName": "mineral4",
	"src": "images/azurite.jpg",
	"src1": "images/azurite1.jpg",
	"src2": "images/azurite2.jpg",
	"chemical_Classification": "Carbonite",
	"colour": "Azure-blue, dark to pale blue",
	"streak": "Light blue",
	"luster": "Vitreous",
	"mohs_Hardness": "3.5 to 4",
	"cleavage": "Perfect on {011}, fair on {100}, poor on {110}",
	"diaphaneity": "Opaque, translucent, transparent",
	"gravity": "3.77",
	"chemical_Composition": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>",
	"specialProperties": "Azurite is destroyed by heat," +
		" losing carbon dioxide and water to form" +
		" black, copper(II) oxide powder. Characteristic " +
		"of a carbonate, specimens effervesce upon treatment with hydrochloric acid.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fifth mineral

tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Chalcedony",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Banded Haematite Quartzite"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Yellowish",
	"correctAns": "Variable",
	"wrongAns2": "White",
	"wrongAns3": "Greenish"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Varaible",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Dull",
	"correctAns": "Waxy-Flat",
	"wrongAns2": "Colorless",
	"wrongAns3": "Earthy"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None",
	"wrongAns1": "Perfect on {011}, fair on {100}, poor on {110}",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Poor"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6.5-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-5",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "3.77",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.2-2.9",
	"wrongAns3": "3"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "BaSO<sub>4</sub>Mg<sub>4.5-2.3</sub>Fe<sup>2+</sup><sub>0.5-2.5</sub>",
	"wrongAns2": "SiO<sub>2</sub>Cu(OH)<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. "
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "None of these",
	"wrongAns1": "Opaque, Translucent, Transparent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Translucent to Transparent"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 5,
	"originalName": "Banded Agate",
	"dummyName": "mineral5",
	"src": "images/BANDED_AGATE.jpg",
	"src1": "images/BANDED_AGATE1.jpg",
	"src2": "images/BANDED_AGATE2.jpg",
	"chemical_Classification": "Chalcedony",
	"colour": "Variable",
	"streak": "White",
	"luster": "Waxy-Flat",
	"mohs_Hardness": "6.5-7",
	"cleavage": "None",
	"diaphaneity": "NA",
	"gravity": "3.77",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": " Banded Agate is considered as a great stone for healing mind, the body, and the spirit. It is used for protection, security and used for moral stability. It is used as well as a helping stone for organizing person life, soothing, and as a grounding stone.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Six mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Chalcedony",
	"wrongAns1": "Silicate",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Sulfate mineral"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Red",
	"wrongAns1": "Dark to pale blue",
	"wrongAns2": "White",
	"wrongAns3": "Brown to Yellowish"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"correctAns": "None",
	"wrongAns1": "White",
	"wrongAns2": "Light blue",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"correctAns": "Vitreous",
	"wrongAns1": "Silky",
	"wrongAns2": "Pearly",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Indiscernible",
	"wrongAns1": "None - typically breaks with a conchoidal fracture",
	"wrongAns2": "Prismatic",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6.5-7",
	"wrongAns1": "5.5",
	"wrongAns2": "2.5-4.0",
	"wrongAns3": "7.5-8"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.5-2.9",
	"wrongAns1": "3.77",
	"wrongAns2": "4.3-5",
	"wrongAns3": "3.2-3.3"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "SiO<sub>2</sub>(with varying impurities)",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "CaCO<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque",
	"wrongAns1": "None",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);
masterJson = {
	"mineralId": 6,
	"originalName": "Banded Red Jasper",
	"dummyName": "mineral6",
	"src": "images/jasper.jpg",
	"src1": "images/jasper1.jpg",
	"chemical_Classification": "Chalcedony",
	"colour": "Most commonly red",
	"streak": "NA",
	"luster": "Vitreous",
	"mohs_Hardness": "6.5-7",
	"cleavage": "Indiscernible",
	"diaphaneity": "Opaque",
	"gravity": "2.5-2.9",
	"chemical_Composition": "SiO<sub>2</sub> (with varying impurities)",
	"specialProperties": "It can be highly polished and is used for items such as vases, seals, and snuff boxes.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//seventh mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Sulfate mineral, barite group",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Gray",
	"correctAns": "Colorless or white ",
	"wrongAns2": "Yellow",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous,Pearly",
	"wrongAns2": "Colorless",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect cleavage parallel to base and prism faces",
	"wrongAns1": "None - typically breaks with a conchoidal fracture",
	"wrongAns2": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns3": "Schists easily split along cleavage lines into thin flexible layers"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "3.0-3.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "5-6",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "4.3-5",
	"wrongAns1": "3.3-5",
	"wrongAns2": "3.2-5.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);


questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "BaSO<sub>4</sub>",
	"wrongAns1": "Quartz, sericite mica, and chlorite",
	"wrongAns2": "Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 7,
	"originalName": "Barytes",
	"dummyName": "mineral7",
	"src": "images/Barytes.jpg",
	//"src1": "images/BERYL1.jpg",
	//"src2": "images/BERYL2.jpg",
	"chemical_Classification": "Sulfate mineral, barite group ",
	"colour": "Colorless or white ",
	"streak": "White",
	"luster": "Vitreous, Pearly",
	"mohs_Hardness": "3.0-3.5",
	"cleavage": "Perfect cleavage parallel to base and prism faces",
	"diaphaneity": "Transparent to opaque",
	"gravity": "4.3-5",
	"chemical_Composition": "BaSO<sub>4</sub>",
	"specialProperties": " Barite that is used as an aggregate in a heavy cement is crushed and screened to a uniform size. Most barite is ground to a small, uniform size before it is used as a filler or extender, an addition to industrial products, or a weighting agent in petroleum well drilling mud specification barite ",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Eighth mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "An oxide of aluminium ",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Red",
	"correctAns": "Reddish-brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Usually white, but iron stain can discolor",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull,earthy",
	"wrongAns2": "Colorless",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None",
	"wrongAns1": "Perfect cleavage parallel to base and prism faces",
	"wrongAns2": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns3": "Schists easily split along cleavage lines into thin flexible layers"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "1-3",
	"wrongAns1": "1-1.5",
	"wrongAns2": "3-3.5",
	"wrongAns3": "2"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.0-2.5",
	"wrongAns1": "3.3-5",
	"wrongAns2": "3.2-5.9",
	"wrongAns3": "4"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "A1<sub>2</sub>O<sub>3</sub>,2H<sub>2</sub>O",
	"wrongAns1": "Quartz, sericite mica, and chlorite",
	"wrongAns2": "Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "BaSO<sub>4</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 8,
	"originalName": "Bauxite",
	"dummyName": "mineral8",
	"src": "images/BAUXITE.jpg",
	"src1": "images/BAUXITE1.jpg",
	"src2": "images/BAUXITE2.jpg",
	"chemical_Classification": "An oxide of aluminium",
	"colour": "Reddish-brown",
	"streak": "Usually white, but iron stain can discolor",
	"luster": "Dull,earthy ",
	"mohs_Hardness": "1-3",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "2.0-2.5",
	"chemical_Composition": "A1<sub>2</sub>O<sub>3</sub>,2H<sub>2</sub>O",
	"specialProperties": " Bauxite is used to produce alumina, which is then used to produce aluminum. Wastes can be generated at several points in the production process, including during the mining of the bauxite ore, and during the refinery production process. ",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//nineth mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Cyclosilicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Gray",
	"correctAns": "Pale brownish-green, bluish-green and gray",
	"wrongAns2": "Greenish brown",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous to resinous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Imperfect on {0001}",
	"wrongAns1": "None - typically breaks with a conchoidal fracture",
	"wrongAns2": "Perfect cleavage parallel to base and prism faces",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "7.5-8",
	"wrongAns1": "3-3.5",
	"wrongAns2": "5-6",
	"wrongAns3": "2-3.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.63-2.92",
	"wrongAns1": "3.3-5",
	"wrongAns2": "3.2-5.9",
	"wrongAns3": "2-3"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "Be<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>",
	"wrongAns1": "Quartz, sericite mica, and chlorite",
	"wrongAns2": "BaSO<sub>4</sub>Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque"
};
tempQuestionArr.push(questionAnswer);
 
masterJson = {
	"mineralId": 9,
	"originalName": "Beryl",
	"dummyName": "mineral9",
	"src": "images/BERYL.jpg",
	"src1": "images/BERYL1.jpg",
	"src2": "images/BERYL2.jpg",
	"chemical_Classification": "Cyclosilicate",
	"colour": "Pale brownish-green, bluish-green and gray",
	"streak": "White",
	"luster": "Vitreous to resinous",
	"mohs_Hardness": "7.5-8",
	"cleavage": "Imperfect on {0001}",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.63-2.92",
	"chemical_Composition": "Be<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>",
	"specialProperties": " Precious beryl is said to be first recognized as a powerful stone in ancient Mesopotamia, where it was believed to strengthen belief in the gods. It was viewed as a healing stone in ancient Greece, where precious beryl was dipped into drinking water and that water was drunk to remove kidney stones and bladder ailments.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Tenth mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Carbonite",
	"wrongAns1": "Cyclosilicate",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Gray",
	"correctAns": "White or none",
	"wrongAns2": "Whitish yellow",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Resinous",
	"correctAns": "Vitreous to pearly on cleavage surfaces",
	"wrongAns2": "Vitreous to resinous",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect, rhombohedral",
	"wrongAns1": "None - typically breaks with a conchoidal fracture",
	"wrongAns2": "Perfect cleavage parallel to base and prism faces",
	"wrongAns3": "Imperfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "3 ",
	"wrongAns1": "5",
	"wrongAns2": "6",
	"wrongAns3": "2"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.71",
	"wrongAns1": "1-2",
	"wrongAns2": "3.2-5",
	"wrongAns3": "2-3"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "CaCO<sub>3</sub>",
	"wrongAns1": " Be<sub>3</sub>Al<sub>2</sub>Si<sub>6</sub>O<sub>18</sub>",
	"wrongAns2": "BaSO<sub>4</sub>Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 10,
	"originalName": "Calcite",
	"dummyName": "mineral10",
	"src": "images/CALCITE.jpg",
	"src1": "images/CALCITE1.jpg",
	"src2": "images/CALCITE2.jpg",
	"chemical_Classification": "Carbonite ",
	"colour": "White or none",
	"streak": "White",
	"luster": "Vitreous to pearly on cleavage surfaces",
	"mohs_Hardness": "3 (defining mineral)",
	"cleavage": "Perfect, rhombohedral",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.71",
	"chemical_Composition": "CaCO<sub>3</sub>",
	"specialProperties": " Calcite is the mineral component of limestone which is used primarily as construction aggregates, and in production of lime and cement.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Eleventh mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Oxide minerals, quartz group",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Metamorphic",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Black",
	"correctAns": "Colourless, white, gray, blue, any color due to embedded minerals, multicolored specimen not uncommon",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous to pearly",
	"correctAns": "Waxy, Vitreous dull, greasy, silky",
	"wrongAns2": "Colorless",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Absent",
	"wrongAns1": "None - typically breaks with a conchoidal fracture",
	"wrongAns2": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "5-6",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.59-2.61",
	"wrongAns1": "2.3-3",
	"wrongAns2": "3.2-5.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% ",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 11,
	"originalName": "Chalcedony",
	"dummyName": "mineral11",
	"src": "images/CHALCEDONY.jpg",
	"src1": "images/CHALCEDONY.jpg",
	"src2": "images/CHALCEDONY.jpg",
	"chemical_Classification": "Oxide minerals, quartz group",
	"colour": "Colourless, white, gray, blue, any color due to embedded minerals, multicolored specimen not uncommon",
	"streak": "White",
	"luster": "Waxy, Vitreous dull, greasy, silky",
	"mohs_Hardness": "6-7",
	"cleavage": "Absent",
	"diaphaneity": "Translucent",
	"gravity": "2.59-2.61",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": " Chalcedony is a nurturing stone that promotes brotherhood and good will. It absorbs negative energy. It brings the mind, body, emotions and spirit into harmony. Chalcedony instills feelings of benevolence and generosity. ",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Twelth mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Oxide minerals, spinel group",
	"wrongAns1": "Oxide minerals, quartz group",
	"wrongAns2": "Metamorphic",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Black",
	"correctAns": "Black to brownish black; brown to brownish black ",
	"wrongAns2": "Greyish",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Brown",
	"wrongAns2": "Colorless",
	"wrongAns3": "White"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous to pearly",
	"correctAns": "Resinous, Greasy, Metallic, Sub-Metallic, Dull",
	"wrongAns2": "Colorless",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None",
	"wrongAns1": "Schists easily split along cleavage lines into thin flexible layers",
	"wrongAns2": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "5.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "5-6",
	"wrongAns3": "6.7"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "4.5-4.8",
	"wrongAns1": "2.3-3",
	"wrongAns2": "3.2-5.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "(Fe,Mg)Cr<sub>2</sub>O<sub>4</sub>",
	"wrongAns1": "Al<sub>2</sub> O<sub>3</sub>SiO<sub>2</sub>",
	"wrongAns2": "It contains 38.9% Fe, 42.32% SiO<sub>2</sub> and 1.03% ",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Translucent to Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 12,
	"originalName": "Chromite",
	"dummyName": "mineral12",
	"src": "images/Chromite1.jpg",
	"src1": "images/Chromite2.jpg",
	"src2": "images/Chromite3.jpg",
	"chemical_Classification": "Oxide minerals, spinel group",
	"colour": "Black to brownish black; brown to brownish black on thin edges in transmitted light",
	"streak": "Brown",
	"luster": "Resinous, Greasy, Metallic, Sub-Metallic, Dull",
	"mohs_Hardness": "5.5",
	"cleavage": "None",
	"diaphaneity": "Translucent to opaque",
	"gravity": "4.5-4.8",
	"chemical_Composition": "(Fe,Mg)Cr<sub>2</sub>O<sub>4</sub>",
	"specialProperties": " Chromite is the main source of the metal chromium, a metal used to induce hardness, toughness and chemical resistance in steel. It was named after its chemical composition, chromium oxide. The mineral is brownish to black in colour with a dark brown streak.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Thirteenth mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Microcrystalline quartz mineral",
	"wrongAns1": "Oxide minerals, quartz group",
	"wrongAns2": "Metamorphic",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Black",
	"correctAns": "Gray, black, brown, red, white and other colors  ",
	"wrongAns2": "Colorless",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous to pearly",
	"correctAns": "Waxy, Dull",
	"wrongAns2": "Resinous",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None",
	"wrongAns1": "Schists easily split along cleavage lines into thin flexible layers",
	"wrongAns2": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6.5-7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "5-6",
	"wrongAns3": "6.7"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.7",
	"wrongAns1": "2.3-3",
	"wrongAns2": "3",
	"wrongAns3": "4"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "Al<sub>2</sub> O<sub>3</sub>SiO<sub>2</sub>",
	"wrongAns2": "It contains 38.9% Fe, 42.32%  and 1.03% ",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "None of these",
	"wrongAns1": "Translucent to Opaque",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 13,
	"originalName": "Flint",
	"dummyName": "mineral13",
	"src": "images/FLINT.jpg",
	"src1": "images/FLINT1.jpg",
	"src2": "images/FLINT2.jpg",
	"chemical_Classification": "Microcrystalline quartz mineral",
	"colour": "Gray, black, brown, red, white and other colors due to staining",
	"streak": "White",
	"luster": "Waxy, Dull",
	"mohs_Hardness": "6.5-7",
	"cleavage": "None",
	"diaphaneity": "NA",
	"gravity": "2.7",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": " Flint is a hard, tough chemical or biochemical sedimentary rock that breaks with a conchoidal fracture. It is a form of microcrystalline quartz that is typically called chert by geologists. Flint often forms as nodules in sedimentary rocks such as chalk and marine limestones.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//Fourteenth mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Tectosilicate",
	"wrongAns1": "Oxide minerals, quartz group",
	"wrongAns2": "Metamorphic",
	"wrongAns3": "Microcrystalline quartz mineral"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Reddish black",
	"correctAns": "pink, white, gray, brown, blue",
	"wrongAns2": "Colorless",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Pearly",
	"correctAns": "Vitreous",
	"wrongAns2": "Resinous",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Two or three",
	"wrongAns1": "Schists easily split along cleavage lines into thin flexible layers",
	"wrongAns2": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns3": "None"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6.0-6.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "5-6",
	"wrongAns3": "6.7"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.55-2.76",
	"wrongAns1": "2.3-3",
	"wrongAns2": "3",
	"wrongAns3": "4"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "KAlSi<sub>3</sub>O<sub>8</sub> - NaAlSi<sub>3</sub>O<sub>8</sub> - CaAl<sub>2</sub>Si<sub>2</sub>O",
	"wrongAns1": "Al<sub>2</sub> O<sub>3</sub>SiO<sub>2</sub>CaAl<sub>2</sub>Si<sub>2</sub>O",
	"wrongAns2": "It contains 38.9% Fe, 42.32%  and 1.03% ",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>SiO<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque",
	"wrongAns1": "Translucent to Transparent",
	"wrongAns2": "Translucent",
	"wrongAns3": "Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 14,
	"originalName": "Fluorite (Feldspar)",
	"dummyName": "mineral14",
	"src": "images/FLUORITE.jpg",
	"src1": "images/FLUORITE1.jpg",
	"src2": "images/FLUORITE2.jpg",
	"chemical_Classification": "Tectosilicate",
	"colour": "pink, white, gray, brown, blue",
	"streak": "White",
	"luster": "Vitreous",
	"mohs_Hardness": "6.0-6.5",
	"cleavage": "two or three",
	"diaphaneity": "Opaque",
	"gravity": "2.55-2.76",
	"chemical_Composition": "KAlSi<sub>3</sub>O<sub>8</sub> - NaAlSi<sub>3</sub>O<sub>8</sub> - CaAl<sub>2</sub>Si<sub>2</sub>O",
	"specialProperties": " It is the only common mineral that has four directions of perfect cleavage, often breaking into pieces with the shape of an octahedron. It is also the mineral used for a hardness of four in the Mohs Hardness Scale. Finally, it has a specific gravity of 3.2, which is detectably higher than most other minerals.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//fifteenth mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Sulfide mineral",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Lead gray and silvery",
	"wrongAns1": "Black",
	"wrongAns2": "Gray",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Lead gray",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous",
	"correctAns": "Metallic on cleavage planes",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Cubic perfect on {001}, parting on {111}",
	"wrongAns1": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "2.5-2.75",
	"wrongAns1": "2.1-2.5",
	"wrongAns2": "1-2",
	"wrongAns3": "5-6"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "7.2-7.6",
	"wrongAns1": "6-7",
	"wrongAns2": "7-7.9",
	"wrongAns3": "3"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "PbS",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 15,
	"originalName": "Galena",
	"dummyName": "mineral15",
	"src": "images/Galena.jpg",
	"src1": "images/Galena1.jpg",
	"src2": "images/Galena2.jpg",
	"chemical_Classification": "Sulfide mineral",
	"colour": "Lead gray and silvery",
	"streak": "Lead gray",
	"luster": "Metallic on cleavage planes",
	"mohs_Hardness": "2.5-2.75",
	"cleavage": "Cubic perfect on {001}, parting on {111}",
	"diaphaneity": "Opaque",
	"gravity": "7.2-7.6",
	"chemical_Composition": "PbS",
	"specialProperties": " Galena is one of the most abundant and widely distributed sulfide minerals. It crystallizes in the cubic crystal system often showing octahedral forms.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Sixteenth mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Nesosilicate",
	"wrongAns1": "Silicate",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Virtually all colors, blue is rare",
	"wrongAns1": "Lead gray and silvery",
	"wrongAns2": "Gray",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Black",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Metallic",
	"correctAns": "Vitreous to resinous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Indistinct",
	"wrongAns1": "Distinct",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6.5-7.5",
	"wrongAns1": "2.1-2.5",
	"wrongAns2": "6-7",
	"wrongAns3": "5-6"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "3.1-4.3",
	"wrongAns1": "4.5-4.8",
	"wrongAns2": "7-7.5",
	"wrongAns3": "4"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "X<sub>3</sub>Y<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Obvious-to-translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Transparent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 16,
	"originalName": "Garnet",
	"dummyName": "mineral16",
	"src": "images/GARNET.jpg",
	"src1": "images/GARNET1.jpg",
	"src2": "images/GARNET2.jpg",
	"chemical_Classification": "Nesosilicate",
	"colour": "virtually all colors, blue is rare",
	"streak": "White",
	"luster": "vitreous to resinous",
	"mohs_Hardness": "6.5-7.5",
	"cleavage": "Indistinct",
	"diaphaneity": "Obvious-to-translucent",
	"gravity": "3.1-4.3",
	"chemical_Composition": "The general formula X<sub>3</sub>Y<sub>2</sub>(SiO<sub>4</sub>)<sub>3</sub> ",
	"specialProperties": " They all have a vitreous luster, a obvious-to-translucent diaphaneity, a brittle tenacity, and a loss of cleavage. They may be found as man or woman crystals, stream-worn pebbles, granular aggregates, and massive occurrences.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Seventeenth mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Native Mineral",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Black, to gray",
	"correctAns": "Iron-black to steel-gray, deep blue in transmitted light",
	"wrongAns2": "Silver to white",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Gray",
	"correctAns": "Black",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous,Pearly",
	"correctAns": "Metallic, earthy",
	"wrongAns2": "Colorless",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Basal - perfect on {0001}	",
	"wrongAns1": "Perfect",
	"wrongAns2": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns3": "Schists easily split along cleavage lines into thin flexible layers"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "1-2",
	"wrongAns1": "3.5-4",
	"wrongAns2": "1.8-2.2",
	"wrongAns3": "5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "1.9-2.3",
	"wrongAns1": "3.3-5",
	"wrongAns2": "1-2",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "C",
	"wrongAns1": "chlorite",
	"wrongAns2": "Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "PbS"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque, transparent only in extremely thin flakes",
	"wrongAns1": "None of these",
	"wrongAns2": "Transparent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 17,
	"originalName": "Graphite",
	"dummyName": "mineral17",
	"src": "images/GRAPHITE.jpg",
	"src1": "images/GRAPHITE1.jpg",
	"src2": "images/GRAPHITE2.jpg",
	"chemical_Classification": "Native Mineral",
	"colour": "Iron-black to steel-gray; deep blue in transmitted light",
	"streak": "Black",
	"luster": "Metallic, earthy",
	"mohs_Hardness": "1-2",
	"cleavage": "Basal - perfect on {0001}",
	"diaphaneity": "Opaque, transparent only in extremely thin flakes",
	"gravity": "1.9-2.3",
	"chemical_Composition": "C",
	"specialProperties": " Graphite is gray to black in color, opaque with a metallic luster. It is a fairly soft crystalline form of carbon with a Mohs hardness of 1 to 2. Stable and chemically inert at normal temperatures, graphite has a very high sublimation point, in the absence of air.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Eighteenth mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Sulfate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Red",
	"correctAns": "Colorless to white yellow, tan, blue, pink, dark brown, reddish brown or gray	",
	"wrongAns2": "Silver",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Gray",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Metallic, earthy",
	"correctAns": "Vitreous to silky, pearly, or waxy",
	"wrongAns2": "Colorless",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect on {010}, distinct on {100}",
	"wrongAns1": "Basal - perfect on {0001}	",
	"wrongAns2": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns3": "Schists easily split along cleavage lines into thin flexible layers"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "1.5-2",
	"wrongAns1": "3.5-4",
	"wrongAns2": "1.8-2.2",
	"wrongAns3": "5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.31-2.33",
	"wrongAns1": "3.3-5",
	"wrongAns2": "1-2",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "CaSO<sub>4</sub>·2H<sub>2</sub>O",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "PbS"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 18,
	"originalName": "Gypsum",
	"dummyName": "mineral18",
	"src": "images/GYPSUM.jpg",
	"src1": "images/GYPSUM1.jpg",
	"src2": "images/GYPSUM2.jpg",
	"chemical_Classification": "Sulfate minerals",
	"colour": "Colorless (in transmitted light) to white; often tinged other hues due to impurities; may be yellow, tan, blue, pink, dark brown, reddish brown or gray",
	"streak": "White",
	"luster": "Vitreous to silky, pearly, or waxy",
	"mohs_Hardness": "1.5-2",
	"cleavage": "Perfect on {010}, distinct on {100}	",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.31-2.33",
	"chemical_Composition": "CaSO<sub>4</sub>·2H<sub>2</sub>O",
	"specialProperties": " Characterized by its softness and its three directions of unequal cleavage. Its solubility in acid and the presence of much water distinguish it from anhydrite.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Ninteenth mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Oxide minerals",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Metamorphic",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Red",
	"correctAns": "Metallic gray, dull to bright rust-red, steel-gray to black",
	"wrongAns2": "Red to brown",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Reddish",
	"correctAns": "Bright red to dark red",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Metallic, earthy",
	"correctAns": "Metallic to splendent",
	"wrongAns2": "Distinct",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None, may show partings on {0001} and {1011}",
	"wrongAns1": "Basal - perfect on {0001}	",
	"wrongAns2": "Perfect in two directions at close to 60 to 120 degree angles",
	"wrongAns3": "Schists easily split along cleavage lines into thin flexible layers"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "5.5-6.5",
	"wrongAns1": "3.5-4",
	"wrongAns2": "1.8-2.2",
	"wrongAns3": "5-6"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "5.26",
	"wrongAns1": "3.3-5",
	"wrongAns2": "1-2",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "Iron(III) oxide, Fe<sub>2</sub>O<sub>3</sub>, &alpha;-Fe<sub>2</sub>O<sub>3</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "Al<sub>2</sub> O<sub>3</sub>",
	"wrongAns3": "CaSO<sub>4</sub>.2H<sub>2</sub>O"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);

 
masterJson = {
	"mineralId": 19,
	"originalName": "Haematite",
	"dummyName": "mineral19",
	"src": "images/HAEMATITE.jpg",
	"src1": "images/HAEMATITE1.jpg",
	"src2": "images/HAEMATITE2.jpg",
	"chemical_Classification": "Oxide minerals",
	"colour": "Metallic gray, dull to bright rust-red in earthy, compact, fine-grained material, steel-gray to black in crystals and massively crystalline ores",
	"streak": "Bright red to dark red",
	"luster": "Metallic to splendent",
	"mohs_Hardness": "5.5-6.5",
	"cleavage": "None, may show partings on {0001} and {1011}",
	"diaphaneity": "Opaque",
	"gravity": "5.26",
	"chemical_Composition": "Iron(III) oxide, Fe<sub>2</sub>O<sub>3</sub>, &alpha;-Fe<sub>2</sub>O<sub>3</sub>",
	"specialProperties": " It also occurs as short, black, rhombohedral crystals and may have an iridescent tarnish. The soft, fine-grained, and earthy form of hematite is used as a pigment.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//20th mineral
tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Sulfide",
	"wrongAns1": "Silicate",
	"wrongAns2": "Carbonite",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Brass Yellow or dull brass",
	"wrongAns1": "Red",
	"wrongAns2": "White",
	"wrongAns3": "Dark to pale blue"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"correctAns": "Greenish black to brownish black",
	"wrongAns1": "White",
	"wrongAns2": "Light blue to dark blue",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"correctAns": "Metallic",
	"wrongAns1": "Silky",
	"wrongAns2": "Pearly",
	"wrongAns3": "Vitreous"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Breaks with a conchoidal fracture",
	"wrongAns1": "Indiscernible",
	"wrongAns2": "Prismatic",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6-6.5",
	"wrongAns1": "5.5",
	"wrongAns2": "7.5-8",
	"wrongAns3": "2.5-4.0"
};

tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "4.9-5.2",
	"wrongAns1": "3.77",
	"wrongAns2": "4.3-5",
	"wrongAns3": "3.2-3.3"
};

tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "FeS<sub>2</sub>",
	"wrongAns1": "SiO<sub>2</sub>",
	"wrongAns2": "CaCO<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Translucent",
	"wrongAns1": "Opaque",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);
masterJson = {
	"mineralId": 20,
	"originalName": "Iron Pyrite (Fools Gold)",
	"dummyName": "mineral20",
	"src": "images/IRON_PYRITE(Fool_Gold).jpg",
	"src1": "images/IRON_PYRITE(Fool_Gold)1.jpg",
	"src2": "images/IRON_PYRITE(Fool_Gold)2.jpg",
	
	"chemical_Classification": "Sulfide",
	"colour": "Brass yellow - often tarnished to dull brass.",
	"streak": "Greenish black to brownish black",
	"luster": "Metallic",
	"mohs_Hardness": "6 to 6.5",
	"cleavage": "Breaks with a conchoidal fracture",
	"diaphaneity": "Translucent",
	"gravity": "4.9 to 5.2",
	"chemical_Composition": "Iron sulfide, FeS<sub>2</sub>",
	"specialProperties": "Ore of Gold",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//	21st mineral
tempQuestionArr = [];

questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Sulfide",
	"wrongAns1": "Silicate",
	"wrongAns2": "Carbonite",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Clear",
	"wrongAns1": "Red",
	"wrongAns2": "White",
	"wrongAns3": "Brass Yellow"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"correctAns": "White",
	"wrongAns1": "Greenish black to brownish black",
	"wrongAns2": "Light blue to dark blue",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"correctAns": "Vitreous",
	"wrongAns1": "Silky",
	"wrongAns2": "Pearly",
	"wrongAns3": "Metallic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect cleavage",
	"wrongAns1": "Indiscernible",
	"wrongAns2": "Prismatic",
	"wrongAns3": "Breaks with a conchoidal fracture"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "3",
	"wrongAns1": "5.5",
	"wrongAns2": "7.5-8",
	"wrongAns3": "2.5-4.0"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.7",
	"wrongAns1": "3.77",
	"wrongAns2": "4.3-5",
	"wrongAns3": "4.9-5.2"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "CaCO<sub>3</sub>",
	"wrongAns1": "SiO<sub>2</sub>",
	"wrongAns2": "FeS<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};

tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent",
	"wrongAns1": "Opaque",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 21,
	"originalName": "Iceland Spar",
	"dummyName": "minera2l",
	"src": "images/icelandSpar.jpg",
	"src1": "images/icelandSpar1.jpg",
	"src2": "images/icelandSpar2.jpg",
	"chemical_Classification": "Sulfide",
	"colour": "Clear",
	"streak": "White",
	"luster": "Vitreous",
	"mohs_Hardness": "3",
	"cleavage": "Perfect",
	"diaphaneity": "Transparent",
	"gravity": "2.7",
	"chemical_Composition": "CaCO<sub>3</sub>",
	"specialProperties": "Exhibits double refraction.",
	"question": tempQuestionArr
};
masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//		22nd mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Sulfide",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "White, colorless, Blue, Gray, Green",
	"wrongAns1": "Clear",
	"wrongAns2": "Brass Yellow",
	"wrongAns3": "Red, Yellow, Brass"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"correctAns": "White, colorless",
	"wrongAns1": "Greenish black to brownish black",
	"wrongAns2": "Light blue to dark blue",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"correctAns": "Vitreous, pearly",
	"wrongAns1": "Metallic",
	"wrongAns2": "Silky",
	"wrongAns3": "None"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect in two directions, faces sometimes striated",
	"wrongAns1": "Indiscernible",
	"wrongAns2": "Prismatic",
	"wrongAns3": "Breaks with a conchoidal fracture"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "4.5 to 5 along the length of the crystals and 6.5 to 7 across the width of the crystals",
	"wrongAns1": "7.5-8 along the length of crystal",
	"wrongAns2": "5.5 along the length of crystal and 5.8 across the width of crystal",
	"wrongAns3": "2.5-4.0 across the width of crystal"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "3.5-3.7",
	"wrongAns1": "3.77",
	"wrongAns2": "4.3-5",
	"wrongAns3": "4.9-5.2"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "Al<sub>2</sub>SiO<sub>5</sub>",
	"wrongAns1": "FeS<sub>2</sub>",
	"wrongAns2": "CaCO<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>. Cu(OH)<sub>2</sub>"
};

tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "Opaque",
	"wrongAns2": "Translucent",
	"wrongAns3": "Transparent"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 22,
	"originalName": "Kayanite",
	"dummyName": "mineral22",
	"src": "images/kyanite.jpg",
	"src1": "images/kyanite1.jpg",
	"src2": "images/kyanite2.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Blue, white, gray, green, colorless",
	"streak": "White,colorless",
	"luster": "Vitreous,pearly",
	"mohs_Hardness": "4.5 to 5 along the length of the crystals and 6.5 to 7 across the width of the crystals.",
	"cleavage": "Perfect in two directions, faces sometimes striated",
	"diaphaneity": "Transparent to translucent",
	"gravity": "3.5 to 3.7",
	"chemical_Composition": "Al<sub>2</sub>SiO<sub>5</sub>",
	"specialProperties": "Ceramics, gemstones",
	"question": tempQuestionArr
};
masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 23

tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Amorphous, mineraloid",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Yellowish brown to brown to black",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Yellowish brown",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous",
	"correctAns": "Dull to earthy",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Does not cleave",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "1-5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.7 to 4.3",
	"wrongAns1": "4.3 to 5",
	"wrongAns2": "2.5  to 2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "A hydrated iron oxide of variable composition",
	"wrongAns1": "Variable but always rich in aluminium oxides and aluminium Hydroxides",
	"wrongAns2": "Lime - 38-42%, Silica - 20-25% and Alumina - 2-4%",
	"wrongAns3": "Quartz, feldspar, Lithics "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque ",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 23,
	"originalName": "Limonite",
	"dummyName": "Mineral23",
	"src": "images/LIMONITE1.jpg",
	"src1": "images/LIMONITE2.jpg",
	"src2": "images/LIMONITE3.jpg",
	"chemical_Classification": "Amorphous, mineraloid",
	"colour": "Yellowish brown to brown to black",
	"streak": "Yellowish brown",
	"luster": "Dull to earthy",
	"mohs_Hardness": "1 to 5 ",
	"cleavage": "Does not cleave because it has an amorphous structure.",
	"diaphaneity": "Opaque",
	"gravity": "2.7 to 4.3",
	"chemical_Composition": "A hydrated iron oxide of variable composition",
	"specialProperties": "Ocher pigments, a minor ore of iron",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 24
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Oxide",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Black to silvery Gray",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Black",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous",
	"correctAns": "Metallic to submetallic",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "5-6.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "2.2-8.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "5.2",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "Fe<sub>3</sub>O<sub>4</sub>",
	"wrongAns1": "CaCO<sub>3</sub>",
	"wrongAns2": "FeS<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 24,
	"originalName": "Magnetite",
	"dummyName": "Mineral24",
	"src": "images/MAGNETITE.jpg",
	"src1": "images/MAGNETITE1.jpg",
	"src2": "images/MAGNETITE2.jpg",
	"chemical_Classification": "Oxide",
	"colour": "Black to silvery Gray",
	"streak": "Black",
	"luster": "Metallic to submetallic",
	"mohs_Hardness": "5 to 6.5 ",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "5.2",
	"chemical_Composition": "Fe<sub>3</sub>O<sub>4</sub>",
	"specialProperties": "The most important ore of iron. Heavy media separation. Studies of Earth's magnetic field",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 25
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Carbonate",
	"wrongAns1": "Oxide",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Green",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Green",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous",
	"correctAns": "Rare crystals are vitreous to adamantine. Fibrous Specimens are silky",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect in one direction. Fair in a second direction",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "3.5 to 4.0 ",
	"wrongAns1": "7.5 to 8.0",
	"wrongAns2": "2.5 to 6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "3.6 to 4.0",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "Cu<sub>2</sub>(CO<sub>3</sub>)(OH)<sub>2</sub>",
	"wrongAns1": "CaCO<sub>3</sub>",
	"wrongAns2": "FeS<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque, Translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 25,
	"originalName": "Malachite",
	"dummyName": "Mineral25",
	"src": "images/MALACHITE3.jpg",
	"src1": "images/MALACHITE1.jpg",
	"src2": "images/MALACHITE2.jpg",
	"chemical_Classification": "Carbonate",
	"colour": "Green",
	"streak": "Green",
	"luster": "Rare crystals are vitreous to adamantine. Fibrous Specimens are silky",
	"mohs_Hardness": "3.5 to 4.0 ",
	"cleavage": "Perfect in one direction. Fair in a second direction",
	"diaphaneity": "Most specimens are opaque. Crystals are translucent",
	"gravity": "3.6 to 4.0",
	"chemical_Composition": "Cu<sub>2</sub>(CO<sub>3</sub>)(OH)<sub>2</sub>",
	"specialProperties": "A minor ore of copper. Gemstones, small sculptures, Pigment",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 26
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Black, brown ",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Green",
	"correctAns": "White, often sheds tiny flakes",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous",
	"correctAns": "Pearly to vitreous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "None"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "2.5 to 3",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.8-2.9",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "KAl<sub>2</sub>(Si<sub>3</sub>AlO<sub>10</sub>)OH)<sub>2<sub>",
	"wrongAns1": "SiO<sub>2</sub>",
	"wrongAns2": "FeS<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 26,
	"originalName": "Muscovite",
	"dummyName": "Mineral26",
	"src": "images/Muscovite1.jpg",
	"src2": "images/Muscovite2.jpg",
	"src3": "images/Muscovite3.jpg",
	"chemical_Classification": "Silicate",
	"colour": "black, brown ",
	"streak": "White, often sheds tiny flakes",
	"luster": "Pearly to vitreous",
	"mohs_Hardness": "2.5 to 3 ",
	"cleavage": "Perfect",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.8 to 2.9",
	"chemical_Composition": "KAl<sub>2</sub>(Si<sub>3</sub>AlO<sub>10</sub>)OH)<sub>2<sub>",
	"specialProperties": "Ocher pigments, a minor ore of iron",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 27
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Native element",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Copper red, dull brown ",
	"wrongAns2": "White",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Metallic copper red",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous",
	"correctAns": "Metallic",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "2.5-3",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "8.9",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "Copper, Cu",
	"wrongAns1": "Silica",
	"wrongAns2": "Calcium ",
	"wrongAns3": "Sodium "
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 27,
	"originalName": "Native Copper",
	"dummyName": "Mineral27",
	"src": "images/Nativecopper1.jpg",
	"src1": "images/NativeCopper2.jpg",
	"src2": "images/Nativecopper3.jpg",
	"chemical_Classification": "Native element",
	"colour": "Copper red on a fresh surface, dull brown on a tarnished",
	"streak": "Metallic copper red",
	"luster": "Metallic",
	"mohs_Hardness": "2.5 to 3 ",
	"cleavage": "None",
	"diaphaneity": "Opaque",
	"gravity": "8.9",
	"chemical_Composition": "Copper, Cu",
	"specialProperties": "Conducts electricity and heat; wiring, electrical contacts and circuits",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 28
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "A hydrated variety of amorphous silica",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Red",
	"correctAns": "white, yellow, gray,or brown.",
	"wrongAns2": "Green",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Dull",
	"correctAns": "Vitreous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None breaks with a conchoidal fracture",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "5-6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.0-2.2",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "SiO<sub>2</sub>.nH<sub>2</sub>O",
	"wrongAns1": "CaCO<sub>3</sub>",
	"wrongAns2": "FeS<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Translucent, opaque, semi-transparent	",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 28,
	"originalName": "Opal",
	"dummyName": "Mineral28",
	"src": "images/OPAL.jpg",
	"src1": "images/OPAL1.jpg",
	"src2": "images/OPAL2.jpg",
	"chemical_Classification": "A hydrated variety of amorphous silica",
	"colour": "Commonly having a bodycolor of white, yellow, gray, black, or brown.",
	"streak": "White",
	"luster": "Vitreous",
	"mohs_Hardness": "5 to 6 ",
	"cleavage": "None breaks with a conchoidal fracture",
	"diaphaneity": "Translucent, opaque, semi-transparent",
	"gravity": "2.0 to 2.2",
	"chemical_Composition": "SiO<sub>2</sub>.nH<sub>2</sub>O",
	"specialProperties": "Commonly used as a gem and as an ornamental stone",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 29
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "White, gray, pink, reddish, yellow",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Dull",
	"correctAns": "Vitreous, pearly on cleavage faces",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect in two directions intersecting at 90 degrees",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "None"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.5-2.6",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "KAlSi<sub>3</sub>O<sub>8</sub>",
	"wrongAns1": "CaCO<sub>3</sub>",
	"wrongAns2": "FeS<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Translucent to Transparent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 29,
	"originalName": "Orthoclase",
	"dummyName": "Mineral29",
	"src": "images/ORTHOCLASE.jpg",
	"src1": "images/ORTHOCLASE1.jpg",
	"src2": "images/ORTHOCLASE2.jpg",
	"chemical_Classification": "Silicate	",
	"colour": "White, gray, pink, reddish, yellow",
	"streak": "White",
	"luster": "Vitreous, pearly on cleavage faces",
	"mohs_Hardness": "6",
	"cleavage": "Perfect in two directions intersecting at 90 degrees",
	"diaphaneity": "Translucent to transparent",
	"gravity": "2.5 to 2.6",
	"chemical_Composition": "KAlSi<sub>3</sub>O<sub>8</sub>",
	"specialProperties": "Ceramics, glass, abrasives, gemstones, Mohs scale mineral",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 30
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "White or gray",
	"wrongAns2": "Black",
	"wrongAns3": "Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Dull",
	"correctAns": "Vitreous. Pearly on some cleavage faces",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect in two directions that intersect at approximately 90 degrees",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "None"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6-6.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.6-2.8",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "NaAlSi<sub>3</sub>O<sub>8</sub> - CaAl2Si<sub>2</sub>O<sub>8</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>.Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Translucent to Transparent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 30,
	"originalName": "Plagioclase",
	"dummyName": "Mineral30",
	"src": "images/PLAGIOCLASE.jpg",
	"src1": "images/PLAGIOCLASE1.jpg",
	"src2": "images/PLAGIOCLASE2.jpg",
	"chemical_Classification": "Silicate	",
	"colour": "white or gray",
	"streak": "white",
	"luster": "Vitreous. Pearly on some cleavage faces",
	"mohs_Hardness": "6 to 6.5 ",
	"cleavage": "Perfect in two directions that intersect at approximately 90 degrees",
	"diaphaneity": "Translucent to transparent",
	"gravity": "2.6 to 2.8",
	"chemical_Composition": "NaAlSi<sub>3</sub>O<sub>8</sub> - CaAl2Si<sub>2</sub>O<sub>8</sub>",
	"specialProperties": "Plagioclase feldspars are important components of many building stones.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 31
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Barium manganese hydroxide",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Dark gray to black",
	"wrongAns2": "Black",
	"wrongAns3": "Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Black to brownish black",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Dull",
	"correctAns": "Submetallic, dull",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "5-6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "4.5-4.7",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "Ba(Mn)<sup>2+</sup>(Mn<sup>4+</sup>)<sub>8</sub>O<sub>16</sub>(OH)<sub>4</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>.Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 31,
	"originalName": "Psilomelane",
	"dummyName": "Mineral31",
	"src": "images/Psilomelane1.jpg",
	"src1": "images/Psilomelane2.jpg",
	"src2": "images/Psilomelane3.jpg",
	"chemical_Classification": "Barium manganese hydroxide",
	"colour": "Dark gray to black",
	"streak": "Black to brownish black",
	"luster": "Submetallic, dull",
	"mohs_Hardness": "5 to 6 ",
	"cleavage": "None",
	"diaphaneity": "Opaque ",
	"gravity": "4.5 to 4.7",
	"chemical_Composition": "Ba(Mn)<sup>2+</sup>(Mn<sup>4+</sup>)<sub>8</sub>O<sub>16</sub>(OH)<sub>4</sub>",
	"specialProperties": "Psilomelane is an ore of manganese. The banded form combined with Pyrolusite is sometimes polished as a collectors species and as a minor gemstone",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;


//mineral 32
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Manganese dioxide",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Dark gray to black, a bluish tint",
	"wrongAns2": "Black",
	"wrongAns3": "Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Bluish black to black	",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Dull",
	"correctAns": "Metallic, dull",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "1,1",
	"wrongAns1": "3,4",
	"wrongAns2": "2,1",
	"wrongAns3": "None"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6-6.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "4-4.5",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "MnO<sub>2</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>.Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Transparent to translucent"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 32,
	"originalName": "Pyrolusite",
	"dummyName": "Mineral32",
	"src": "images/Pyrolusite1.jpg",
	"src1": "images/Pyrolusite2.jpg",
	"src2": "images/Pyrolusite3.jpg",
	"chemical_Classification": "Manganese dioxide",
	"colour": "Dark gray to black, sometimes with a bluish tint",
	"streak": "Bluish black to black",
	"luster": "Metallic, dull",
	"mohs_Hardness": "6 to 6.5 ",
	"cleavage": "1,1",
	"diaphaneity": "Opaque",
	"gravity": "4 to 4.5",
	"chemical_Composition": "MnO<sub>2</sub>",
	"specialProperties": "It is also a component of the production of steel, and was once used for the manufacture of batteries.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 33
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Clear,white, gray, purple, yellow",
	"wrongAns2": "Black",
	"wrongAns3": "Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Colorless",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Dull",
	"correctAns": "Vitreous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None - typically breaks with a conchoidal fracture",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.6-2.7",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "CaCO<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>.Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 33,
	"originalName": "Quartz",
	"dummyName": "Mineral33",
	"src": "images/QUARTZ.jpg",
	"src1": "images/QUARTZ1.jpg",
	"src2": "images/QUARTZ2.jpg",
	"chemical_Classification": "Silicate	",
	"colour": "Common colours are clear, white, gray, purple, yellow",
	"streak": "Colourless (harder than the streak plate)",
	"luster": "Vitreous",
	"mohs_Hardness": "7",
	"cleavage": "None-typically breaks with a conchoidal fracture ",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.6 to 2.7",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Glass making, abrasive, foundry sand",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 34
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Pale pink to vivid pink",
	"wrongAns2": "Black",
	"wrongAns3": "Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "White",
	"correctAns": "Colorless  ",
	"wrongAns2": "Pink",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Dull",
	"correctAns": "Vitreous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None, breaks with a conchoidal fracture",
	"wrongAns1": "Indiscernible",
	"wrongAns2": "Prismatic",
	"wrongAns3": "Perfect"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "7",
	"wrongAns1": "7.5",
	"wrongAns2": "6.5",
	"wrongAns3": "5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.6-2.7",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "CaCO<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>.Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 34,
	"originalName": "Rose Quartz",
	"dummyName": "Mineral34",
	"src": "images/ROSY_QUARTZ.jpg",
	"src1": "images/ROSY_QUARTZ1.jpg",
	"src2": "images/ROSY_QUARTZ2.jpg",
	"chemical_Classification": "Silicate	",
	"colour": " Pale pink to vivid pink	",
	"streak": "Colourless (harder than the streak plate)",
	"luster": "Vitreous",
	"mohs_Hardness": "7",
	"cleavage": "None, breaks with a conchoidal fracture",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.6 to 2.7",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Cabochons, beads, carvings, spheres",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 35
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Sulphate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Blue,green,gray",
	"correctAns": "Clear, colourless, white, gray, yellow, red, brown",
	"wrongAns2": "Black,colourless,pink,yellow,blue,",
	"wrongAns3": "Green,gray, yellow, red"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Dull",
	"correctAns": "Vitreous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "None"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "2",
	"wrongAns1": "5.5-6.2",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "1"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.3",
	"wrongAns1": "4.3-5",
	"wrongAns2": "3.5-4.9",
	"wrongAns3": "3.2"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "Hydrous calcium sulphate, CaSO<sub>4</sub>.2H<sub>2</sub>O",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>.Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque "
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 35,
	"originalName": "Satin Spar",
	"dummyName": "Mineral35",
	"src": "images/SATINSPAR.jpg",
	"src1": "images/SATINSPAR1.jpg",
	"src2": "images/SATINSPAR2.jpg",
	"chemical_Classification": "Sulphate",
	"colour": "Clear, colourless, white, gray, yellow, red, brown",
	"streak": "white",
	"luster": "Vitreous",
	"mohs_Hardness": "2",
	"cleavage": "Perfect",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.3",
	"chemical_Composition": "Hydrous calcium sulphate, CaSO<sub>4</sub>.2H<sub>2</sub>O",
	"specialProperties": "Used to manufacture dry wall, plaster, joint compound",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 36
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Light yellowish brown to orangish brown",
	"wrongAns2": "Black",
	"wrongAns3": "Light Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "White",
	"correctAns": "Colorless",
	"wrongAns2": "Blue",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Dull",
	"correctAns": "Vitreous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "None - typically breaks with a conchoidal fracture",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Perfect in two directions that intersect at approximately 90 degrees",
	"wrongAns3": "Indiscernible"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.6-2.7",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "SiO<sub>2</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "CaCO<sub>3</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>.Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque "
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 36,
	"originalName": "Smokey Quartz",
	"dummyName": "Mineral36",
	"src": "images/SmokeyQuartz.jpg",
	"chemical_Classification": "Silicate	",
	"colour": "Light yellowish brown to orangish brown",
	"streak": "Colourless (harder than the streak plate)",
	"luster": "Vitreous",
	"mohs_Hardness": "7",
	"cleavage": "None - typically breaks with a conchoidal fracture",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.6 to 2.7",
	"chemical_Composition": "SiO<sub>2</sub>",
	"specialProperties": "Faceted gemstones, cabochons, beads, carvings, spheres",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 37
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Zeolites",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "White, beige, peach",
	"wrongAns2": "Black",
	"wrongAns3": "Green"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Gray",
	"correctAns": "Colorless",
	"wrongAns2": "White",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Dull",
	"correctAns": "Vitreous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "1:1",
	"wrongAns1": "1:5",
	"wrongAns2": "2:3",
	"wrongAns3": "None"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "3.5-4",
	"wrongAns1": "7.5-8",
	"wrongAns2": "2.5-6.0 ",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.21-2.22",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "NaCa<sub>4</sub>(Si<sub>27</sub>Al<sub>9</sub>)O<sub>72</sub>.28(H<sub>2</sub>O).",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>.Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque "
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 37,
	"originalName": "Stilbite",
	"dummyName": "Mineral37",
	"src": "images/STILBITE.jpg",
	"src1": "images/STILBITE1.jpg",
	"src2": "images/STILBITE2.jpg",
	"chemical_Classification": "Zeolites",
	"colour": "White, beige, peach",
	"streak": "Colourless",
	"luster": "Vitreous",
	"mohs_Hardness": "3.5 - 4",
	"cleavage": "1:1",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.21 to 2.22",
	"chemical_Composition": "NaCa<sub>4</sub>(Si<sub>27</sub>Al<sub>9</sub>)O<sub>72</sub>.28(H<sub>2</sub>O).",
	"specialProperties": "Large and well-shaped Stilbite crystals are of interest to Collector",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//mineral 38
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Carbonite",
	"wrongAns2": "Phyllosilicate",
	"wrongAns3": "Chalcedony"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"wrongAns1": "Brown to Yellowish ",
	"correctAns": "Green, white, gray, brown, colorless",
	"wrongAns2": "Black,pink,yellow,gray,red",
	"wrongAns3": "Green,blue,pink,yellow"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White to pale green",
	"wrongAns2": "Colorless",
	"wrongAns3": "Brown"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Dull",
	"correctAns": "Pearly",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "None"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "1",
	"wrongAns1": "2",
	"wrongAns2": "2.52 ",
	"wrongAns3": "0"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.7-2.8",
	"wrongAns1": "4.3-5",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical Composition of this mineral?",
	"correctAns": "Mg<sub>3</sub>Si<sub>4</sub>O<sub>10</sub>(OH)<sub>2</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "2CuCO<sub>3</sub>.Cu(OH)<sub>2</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque"
};
tempQuestionArr.push(questionAnswer);

masterJson = {
	"mineralId": 38,
	"originalName": "Talc",
	"dummyName": "Mineral38",
	"src": "images/TALC.jpg",
	"src1": "images/TALC1.jpg",
	"src2": "images/TALC2.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Green, white, gray, brown, colorless",
	"streak": "White to pale green",
	"luster": "Pearly",
	"mohs_Hardness": "1",
	"cleavage": "Perfect",
	"diaphaneity": "Translucent",
	"gravity": "2.7 to 2.8",
	"chemical_Composition": "Mg<sub>3</sub>Si<sub>4</sub>O<sub>10</sub>(OH)<sub>2</sub>",
	"specialProperties": "Used as a filler and anti-stick coating in plastics, ceramics, paint and paper",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//39th Mineral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Calcite",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Brown to Black",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "White"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous",
	"correctAns": "Vitreous to pearly",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Excellent",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "2.5-3",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.7 -3.3",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "K(Mg,Fe)3(AlSi 3O <sub>10</sub>)(F,OH)<sub>2</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 39,
	"originalName": "Biotite",
	"dummyName": "mineral39",
	"src": "images/Biotite1.jpg",
	"src1": "images/Biotite2.jpg",
	"src2": "images/Biotite3.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Brown to Black",
	"streak": "White",
	"luster": "Vitreous to pearly",
	"mohs_Hardness": "2.5-3",
	"cleavage": "Excellent",
	"diaphaneity": "Transparent to translucent",
	"gravity": "2.7 - 3.3",
	"chemical_Composition": "K(Mg,Fe)3(AlSi 3O <sub>10</sub>)(F,OH)<sub>2</sub>",
	"specialProperties": "Biotite has a highly perfect basal cleavage, and consists of flexible sheets, or lamellae, which easily flake off. It has a monoclinic crystal system, with tabular to prismatic crystals with an obvious pinacoid termination.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourty Minaral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Calcite",
	"wrongAns1": "Silicate",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the color of this mineral?",
	"correctAns": "White",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light yellow",
	"correctAns": "Colourless",
	"wrongAns2": "None of these",
	"wrongAns3": "White"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Vitreous",
	"correctAns": "Pearly",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "[010] Perfect, [100] Distinct, [011] Distinct",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "2",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "1.52 - 1.53",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "CaSO<sub>4</sub>.2H<sub>2</sub>O",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "None of these",
	"wrongAns1": "Transparent to translucent",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};

tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 40,
	"originalName": "Satinspar",
	"dummyName": "mineral40",
	"src": "images/SATINSPAR.jpg",
	"src1": "images/SATINSPAR1.jpg",
	"src2": "images/SATINSPAR2.jpg",
	"chemical_Classification": "Calcite",
	"colour": "White",
	"streak": "Colourless",
	"luster": "Pearly",
	"mohs_Hardness": "2",
	"cleavage": "[010] Perfect, [100] Distinct, [011] Distinct",
	"diaphaneity": "NA",
	"gravity": "1.52 - 1.53",
	"chemical_Composition": "CaSO<sub>4</sub>.2H<sub>2</sub>O",
	"specialProperties": "In modern usage Satin Spar is a compact fibrous variety of Gypsum. It is generally white, silky, and translucent with pearly or milky appearance. Satin Spar can be cut into very striking chatoyant cabochons. Historically, the name Satin Spar was first applied to a variety of calcite.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourty-One Minaral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Calcite",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Usually black, dark green, dark brown",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White, colorless",
	"wrongAns2": "Colorless",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Two directions intersecting at 124 and 56 degrees",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "5 - 6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.9 - 3.5",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "(Ca,Na)<sub>2</sub>-3(Mg,Fe,Al)<sub>5</sub>(Al,Si)<sub>8</sub>O<sub>22</sub>(OH,F)<sub>2</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);


questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Translucent to nearly opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};

tempQuestionArr.push(questionAnswer);

//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 41,
	"originalName": "Hornblende",
	"dummyName": "mineral41",
	"src": "images/Hornblende1.jpg",
	"src1": "images/Hornblende2.jpg",
	"src2": "images/Hornblende3.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Usually black, dark green, dark brown",
	"streak": "White, colorless - (brittle, often leaves cleavage debris behind instead of a streak)",
	"luster": "Vitreous",
	"mohs_Hardness": "5 - 6",
	"cleavage": "Two directions intersecting at 124 and 56 degrees",
	"diaphaneity": "Translucent to nearly opaque",
	"gravity": "2.9 to 3.5 (varies depending upon composition)",
	"chemical_Composition": "Ca,Na)<sub>2</sub>-3(Mg,Fe,Al)<sub>5</sub>(Al,Si)<sub>8</sub>O<sub>22</sub>(OH,F)<sub>2</sub>",
	"specialProperties": "It is crushed and used for highway construction and as railroad ballast. It is cut for use as dimension stone. The highest quality pieces are cut, polished, and sold under the name 'black granite' for use as building facing, floor tiles, countertops, and other architectural uses.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourty-Two Minaral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Calcite",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Pistachio-green, yellow-green, greenish black, brownish-green, green, black",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Black",
	"correctAns": "White to gray",
	"wrongAns2": "Colorless",
	"wrongAns3": "White"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "None of these",
	"correctAns": "Vitreous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "{001} perfect and {100} imperfect",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6 - 7",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "3.38-3.49",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "{Ca<sub>2</sub>}{Al<sub>2</sub>Fe<sub>3+</sub>}[O|OH|SiO<sub>4</sub>|Si<sub>2</sub>O<sub>7</sub>]",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent to opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 42,
	"originalName": "Epidote",
	"dummyName": "mineral42",
	"src": "images/EPIDOTE.jpg",
	"src1": "images/EPIDOTE1.jpg",
	"src2": "images/EPIDOTE2.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Pistachio-green, yellow-green, greenish black, brownish-green, green, black",
	"streak": "White to gray",
	"luster": "Vitreous",
	"mohs_Hardness": "6 - 7",
	"cleavage": "{001} perfect and {100} imperfect",
	"diaphaneity": "Transparent to translucent to opaque",
	"gravity": "3.38-3.49",
	"chemical_Composition": "{Ca<sub>2</sub>}{Al<sub>2</sub>Fe<sub>3+</sub>}[O|OH|SiO<sub>4</sub>|Si<sub>2</sub>O<sub>7</sub>]",
	"specialProperties": "The epidote group occurs as secondary minerals in low-grade regionally metamorphosed rocks where its occurrence is used as an indicator of metamorphic grade.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourty-Three Minaral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Inosilicate",
	"wrongAns1": "Calcite",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Gray, brown, or green",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Greyish white, Greenish",
	"wrongAns2": "Colorless",
	"wrongAns3": "White"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous to pearly",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "{100} Perfect, {010} Perfect",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "5.5-6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "3.4-3.9",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "(Mg,Fe)SiO<sub>3</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Translucent to transparent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 43,
	"originalName": "Hypersthene",
	"dummyName": "mineral43",
	"src": "images/HYPERSTHENE.jpg",
	"src1": "images/HYPERSTHENE1.jpg",
	"src2": "images/HYPERSTHENE2.jpg",
	"chemical_Classification": "Inosilicate",
	"colour": "Gray, brown, or green",
	"streak": "Greyish white, Greenish",
	"luster": "Vitreous to pearly",
	"mohs_Hardness": "5.5-6",
	"cleavage": "{100} Perfect, {010} Perfect",
	"diaphaneity": "Translucent to transparent",
	"gravity": "3.4-3.9",
	"chemical_Composition": "(Mg,Fe)SiO<sub>3</sub>",
	"specialProperties": "Hypersthene or find out as Golden Luck Stone is often way deem as high grade gem in Egypt and life bell and wore of upper class life in Egypt. It's the black color life extremely ward off evil spirits, dissolve negative energy powerfully.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourty-Four Minaral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Calcite",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Light to dark green",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light gray",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Black"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Greasy or waxy",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Poor to perfect",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "3-6",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "2.44-2.77",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "Mg<sub>3</sub>Si<sub>2</sub>O<sub>5</sub>(OH)<sub>4</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Translucent to opaque, rarely transparent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 44,
	"originalName": "Serpentine",
	"dummyName": "mineral44",
	"src": "images/SERPENTINE.jpg",
	"src1": "images/SERPENTINE1.jpg",
	"src2": "images/SERPENTINE2.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Light to dark green",
	"streak": "White",
	"luster": "Greasy or waxy",
	"mohs_Hardness": "3-6",
	"cleavage": "Poor to perfect",
	"diaphaneity": "Translucent to opaque, rarely transparent",
	"gravity": "2.44-2.77",
	"chemical_Composition": "Mg<sub>3</sub>Si<sub>2</sub>O<sub>5</sub>(OH)<sub>4</sub>",
	"specialProperties": "Serpentines find use in industry for a number of purposes, such as railway ballasts, building materials, and the asbestiform types find use as thermal and electrical insulation (chrysotile asbestos).",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourty-Five Minaral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Calcite",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Greenish brown, yellowish green, pinkish brown, orangy brown, white, gray. Strongly pleochroic, often with yellowish green and orangy brown colors",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light yellow",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "Gray"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Poor to good in one direction",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6.5 - 7.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "3.17",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "Al<sub>2</sub>SiO<sub>5</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Translucent to nearly opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 45,
	"originalName": "Andalusite",
	"dummyName": "mineral45",
	"src": "images/ANDALUSITE1.jpg",
	"src1": "images/ANDALUSITE2.jpg",
	"src2": "images/ANDALUSITE3.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Greenish brown, yellowish green, pinkish brown, orangy brown, white, gray. Strongly pleochroic, often with yellowish green and orangy brown colors",
	"streak": "White",
	"luster": "Vitreous",
	"mohs_Hardness": "6.5 - 7.5",
	"cleavage": "Poor to good in one direction",
	"diaphaneity": "Translucent to nearly opaque",
	"gravity": "3.17",
	"chemical_Composition": "Al<sub>2</sub>SiO<sub>5</sub>",
	"specialProperties": "Andalusite is a rock-forming mineral most found in schist, gneiss, and hornfels. Minor amounts are also found in granite and granitic pegmatite.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourty-Six Minaral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Phosphate",
	"wrongAns1": "Calcite",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Green, brown, blue, yellow, violet, pink, colorless. Transparent specimens with excellent clarity and vivid color are used as gemstones.",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light yellow",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "None of these"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous to sub resinous",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Poor to distinct",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "3.1 -3.3",
	"wrongAns1": "1 - 2",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "Ca<sub>5</sub>[PO<sub>4</sub>]<sub>3</sub>(OH,F,Cl)",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Transparent to translucent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 46,
	"originalName": "Apatite",
	"dummyName": "mineral46",
	"src": "images/Apatite.jpg",
	//"src1": "images/Apatite.jpg",
	//"src2": "images/Apatite.jpg",
	"chemical_Classification": "Phosphate",
	"colour": "Green, brown, blue, yellow, violet, pink, colorless. Transparent specimens with excellent clarity and vivid color are used as gemstones.",
	"streak": "White",
	"luster": "Vitreous to sub resinous",
	"mohs_Hardness": "5",
	"cleavage": "Poor to distinct",
	"diaphaneity": "Transparent to translucent",
	"gravity": "3.1 - 3.3",
	"chemical_Composition": "Ca<sub>5</sub>[PO<sub>4</sub>]<sub>3</sub>(OH,F,Cl)",
	"specialProperties": "Apatite is aligned with the zodiac sign of Gemini. The gemstone is believed to decrease appetite (hunger) as well as enhance insight, creativity and learning. It is said that wearing apatite will enhance focus, clarity for concentration, intellect, acceptance and unconditional love.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourty-Seven Minaral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Sulfide",
	"wrongAns1": "Calcite",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Bluish gray to silver",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Bluish gray, gray",
	"wrongAns2": "Colorless",
	"wrongAns3": "White"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Metallic",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect basal",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "1-2",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "4.6 - 4.8",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "Molybdenum sulfide, MoS<sub>2</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 47,
	"originalName": "Molybdenite",
	"dummyName": "mineral47",
	"src": "images/MOLYBDENITE.jpg",
	"src1": "images/MOLYBDENITE1.jpg",
	"src2": "images/MOLYBDENITE2.jpg",
	"chemical_Classification": "Sulfide",
	"colour": "Bluish gray to silver",
	"streak": "Bluish gray, gray",
	"luster": "Metallic",
	"mohs_Hardness": "1-2",
	"cleavage": "Perfect basal",
	"diaphaneity": "Opaque",
	"gravity": "4.6 - 4.8",
	"chemical_Composition": "Molybdenum sulfide, MoS<sub>2</sub>",
	"specialProperties": "Molybdenite is a mineral of molybdenum disulfide, MoS2. Similar in appearance and feel to graphite, molybdenite has a lubricating effect that is a consequence of its layered structure. The atomic structure consists of a sheet of molybdenum atoms sandwiched between sheets of sulfur atoms.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourty-eight Minaral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Sulfide",
	"wrongAns1": "Calcite",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Reddish brown or brownish red on a fresh surface. Iridescent purple, blue, and black on a tarnished surface",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "Grayish black",
	"wrongAns2": "Colorless",
	"wrongAns3": "White"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Submetallic to metallic",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Poor",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "3",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "5.0 - 5.1",
	"wrongAns1": "3.2 - 3.3",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "Copper iron sulfide, Cu<sub>5</sub>FeS<sub>4</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 48,
	"originalName": "Bornite",
	"dummyName": "mineral48",
	"src": "images/BORNITE1.jpg",
	"src1": "images/BORNITE2.jpg",
	"src2": "images/BORNITE3.jpg",
	"chemical_Classification": "Sulfide",
	"colour": "Reddish brown or brownish red on a fresh surface. Iridescent purple, blue, and black on a tarnished surface",
	"streak": "Grayish black",
	"luster": "Submetallic to metallic",
	"mohs_Hardness": "3",
	"cleavage": "Poor",
	"diaphaneity": "Opaque",
	"gravity": "5.0 - 5.1",
	"chemical_Composition": "Copper iron sulfide, Cu<sub>5</sub>FeS<sub>4</sub>",
	"specialProperties": "Bornite is an important copper ore (it is both a copper and iron sulfide mineral). It forms brittle, granular, or compact masses that on fresh fractures are metallic and brassy. Upon exposure to moisture, bornite tarnishes to a purplish iridescence, for which reason it is commonly called peacock ore.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fourty-nine Minaral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Calcite",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Usually gray, yellow, green, or pink",
	"wrongAns1": "Red to Brown",
	"wrongAns2": "White",
	"wrongAns3": "Variable"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light yellow",
	"correctAns": "White",
	"wrongAns2": "Colorless",
	"wrongAns3": "None of these"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous to granular, sugary",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Perfect in one direction",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "6.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "3.2 - 3.4",
	"wrongAns1": "1-2",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "Ca<sub>2</sub>Al<sub>3</sub>(SiO<sub>4</sub>)(Si<sub>2</sub>O<sub>7</sub>)O(OH)",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Translucent to transparent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque, Translucent, Transparent"
};
tempQuestionArr.push(questionAnswer);
//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 49,
	"originalName": "Clinozoisite",
	"dummyName": "mineral49",
	"src": "images/Clinozoisite.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Usually gray, yellow, green, or pink",
	"streak": "White",
	"luster": "Vitreous to granular, sugary",
	"mohs_Hardness": "6.5",
	"cleavage": "Perfect in one direction",
	"diaphaneity": "Translucent to transparent",
	"gravity": "3.2 to 3.4",
	"chemical_Composition": "Ca<sub>2</sub>Al<sub>3</sub>(SiO<sub>4</sub>)(Si<sub>2</sub>O<sub>7</sub>)O(OH)",
	"specialProperties": "Clinozoisite is found in the mountains north of the village of Alchuri in the Shigar valley. The clinozoisites are most commonly of a dark brown color and opaque, but transparent to translucent crystals of a lighter brown and greenish color are also found.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;

//Fifty Minaral
tempQuestionArr = [];
questionAnswer = {
	"question": "What is the chemical classification of this mineral?",
	"correctAns": "Silicate",
	"wrongAns1": "Calcite",
	"wrongAns2": "Mafic",
	"wrongAns3": "Felsic"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the color of this mineral?",
	"correctAns": "Usually gray, light blue to purple, green",
	"wrongAns1": "Red to Brown, pink, white to black",
	"wrongAns2": "Silver",
	"wrongAns3": "Yellow"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the streak property of this mineral?",
	"wrongAns1": "Light blue",
	"correctAns": "White to light green",
	"wrongAns2": "Colorless",
	"wrongAns3": "White"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the luster property of this mineral?",
	"wrongAns1": "Silky",
	"correctAns": "Vitreous, sugary, earthy",
	"wrongAns2": "Colorless",
	"wrongAns3": "Waxy-Flat"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": "What is the cleavage of this mineral?",
	"correctAns": "Two distinct directions, at 87 and 93 degrees; imperfect; prismatic",
	"wrongAns1": "Prismatic",
	"wrongAns2": "Indiscernible",
	"wrongAns3": "Perfect cleavage parallel to base and prism faces"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the Mohs hardness of this mineral?",
	"correctAns": "5.5 - 6.5",
	"wrongAns1": "7.5-8",
	"wrongAns2": "6.5-7",
	"wrongAns3": "5.5"
};
tempQuestionArr.push(questionAnswer);
questionAnswer = {
	"question": " What is the specific gravity of this mineral?",
	"correctAns": "3.2 - 3.5",
	"wrongAns1": "1-2",
	"wrongAns2": "2.5-2.9",
	"wrongAns3": "3.77"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the Chemical composition of this mineral?",
	"correctAns": "MgCaSi<sub>2</sub>O<sub>6</sub>",
	"wrongAns1": "BaSO<sub>4</sub>",
	"wrongAns2": "SiO<sub>2</sub>",
	"wrongAns3": "CaCO<sub>3</sub>"
};
tempQuestionArr.push(questionAnswer);

questionAnswer = {
	"question": " What is the diaphaneity of this mineral?",
	"correctAns": "Opaque, translucent, transparent",
	"wrongAns1": "None of these",
	"wrongAns2": "Obvious-to-translucent",
	"wrongAns3": "Opaque"
};
tempQuestionArr.push(questionAnswer);
//console.log(tempQuestionArr);
masterJson = {
	"mineralId": 50,
	"originalName": "Diopside",
	"dummyName": "mineral50",
	"src": "images/Diopside.jpg",
//	"src1": "images/Diopside1.jpg",
	//"src2": "images/Diopside2.jpg",
	"chemical_Classification": "Silicate",
	"colour": "Grayish white, light blue to purple, light green to vivid green, brown, black",
	"streak": "White to light green",
	"luster": "Vitreous, sugary, earthy",
	"mohs_Hardness": "5.5 - 6.5",
	"cleavage": "Two distinct directions, at 87 and 93 degrees; imperfect; prismatic",
	"diaphaneity": "Opaque, translucent, transparent",
	"gravity": "3.2 to 3.5",
	"chemical_Composition": "MgCaSi<sub>2</sub>O<sub>6</sub>",
	"specialProperties": "Diopside has potential uses in ceramics, glass-making, biomaterials, nuclear waste immobilization, and fuel cell technology. Unfortunately, natural diopside is rarely found in deposits that simultaneously have a size, purity, and location that allows economic mining.",
	"question": tempQuestionArr
};

masterJsonArr.push(masterJson);
tempMasterJson.demo = masterJsonArr;