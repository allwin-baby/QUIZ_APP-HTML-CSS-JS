var questions = [
'The term Linkeage coined by',
'polysome is formed by',
'one turn in helix of B-form of DNA is approximately',
'Amino Acid Sequence,in protein synthesis is decided by the sequence of',
'How many pairs of contrasting charecters are in pea plants were studied by  Mendelsin his Experiment',
'Blood Group A  man marries Blood Group B women child blood groups can be',
'Alleles are',
'Maultiple Alliles are present in',
'Mendels Experiment didnot use',
"Test Cross involves", 
"Sickle cell is",
"Which one of the following canot explained by Mendels's Law of Inheritance ",
"The genotype of a plant showing th dominant phenotype can be determined by ",
"Mutation canbe induced with",
"A test cross is carried out to ",
'Hemophelia is',
'Turner Syndrome is',
"Which one of the following is an example of polygenic inheritance", 


]
var answesr = [
    ['G. Mendel','W. Sutton','T.H. Morgan','T.H. Morgan'],
    ['a ribosome with several sub units','ribosomes attached to each other in a linear arrangement','many ribosomes attached to a strand of endoplasmic reticulum.','ribosomes attached to each other in a linear arrangement'],
    ['3.4 nm','0.34 nm','20 nm','3.4 nm'],
    ['mRNA','rRNA','rRNA','mRNA'],
    ['Eight','Seven','Five','Seven'],
    ['A,B and AB only','A,B,AB and O','A and B only','A,B,AB and O'],
    ['heterozygotes','different phenotype','different molecular forms of a gene','different molecular forms of a gene'],
    ['on different chromosomes','at the same locus of the chromosome','on non-sister chromatids','at the same locus of the chromosome'],
    ['flower position','seed shape','pod length.','pod length.'],
    ['crossing the F1 hybrid with a double recessive genotype.', 'crossing between two F1 hybrids', 'crossing between two F1 hybrids', 'crossing the F1 hybrid with a double recessive genotype.'],
    ['virus related diseases', 'congenital disorders', 'bacteria related diseases0', 'congenital disorders'],
    ['Factors occur in pairs.','he discrete unit controlling a particular character is called a factor,','Alleles do not show any blending and both the characters recover as such in F2 generation.','Alleles do not show any blending and both the characters recover as such in F2 generation.'],
    ['test cross','pedigree analysis ','dihybrid cross','test cross'],
    ['infrared radiations','gamma radiations.','IAA','gamma radiations.'],
    ['determine the genotype of a plant at F2','determine the genotype of a plant at F2','assess the number of alleles of a gene','determine the genotype of a plant at F2'],
    [' single protein involved in the clotting of blood is affected.','It is a recessive disease.','t is a dominant disease.','t is a dominant disease.'],
    ['has one additional X chromosome','has 45 chromosomes with XO','exhibits male characters','has 45 chromosomes with XO'],
    ['Skin colour in humans.', 'Flower colour in Mirabilis jalapa.', 'Production of male honey bee.', 'Skin colour in humans.'],
    
  
    
    ['','','',''],
]
var questionnumber = 0;
var mark = 0;
var minutes = 0;
var seconds = 0;
var t;
var t2=10;
function next() {
    if (questionnumber < questions.length) {
        document.getElementById('img').src = "goodluck.svg";
        var x = document.getElementsByClassName('buttonsofanswer');
        x[0].disabled = false;
        x[1].disabled = false;
        x[2].disabled = false;
        x[0].style.backgroundColor = "white";   ///couldn t set rgb
        x[1].style.backgroundColor = "white";
        x[2].style.backgroundColor = "white";
        document.getElementById('questionfromlist').innerHTML = (questionnumber+1).toString()+". "+questions[questionnumber];
        document.getElementById('button1').innerHTML = answesr[questionnumber][0];
        document.getElementById('button2').innerHTML = answesr[questionnumber][1];
        document.getElementById('button3').innerHTML = answesr[questionnumber][2];
        questionnumber++;
    }
    else {
        clearTimeout(t);
        document.getElementById('buttons').style.visibility = "hidden";
        document.getElementById('questionfromlist').innerHTML = "QUESTIONS ARE OVER";
        document.getElementById('end').style.visibility = "visible";
        document.getElementById('img').src = "goodluck.svg";
        endimageselect();

    }
}
function select(selectedanswer, id) {
    if (answesr[questionnumber - 1][selectedanswer] == answesr[questionnumber - 1][3]) {
        mark++;
        document.getElementById('img').src = "endgood.svg";
    }
    else {
        document.getElementById('img').src = "angry.svg"; 
    }
    
    var x2 = document.getElementsByClassName('buttonsofanswer');
    x2[0].disabled = true;
    x2[1].disabled = true;
    x2[2].disabled = true;
    x2[0].style.backgroundColor="red";
    x2[1].style.backgroundColor="red";
    x2[2].style.backgroundColor="red";
    var p;
    for(i=0;i<3;i++){
        if(x2[i].innerHTML==answesr[questionnumber - 1][3]){
            p=i;
        }
    }
    x2[p].style.backgroundColor="green";





}
function startgame() {
    document.getElementById('outer').style.visibility = "visible";
    document.getElementById('startgame').disabled = true;
    setTimeout('strartafter()',10000);
    settimer2();

}
function strartafter(){
    document.getElementById('start').style.visibility = "hidden";
    next();
    settimer();

}

function settimer() {
    t = setInterval("timer()", 1000);
}

function settimer2() {
    timerrr = setInterval("timer2()", 1000);
}
function timer2(){
    t2--;
    document.getElementById('frontfont').innerHTML="QUIZ STARTS IN "+ t2 + " SECONDS";
}

function timer() {
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById('minute').innerHTML = minutes.toString() + "   Minute";
    document.getElementById('seconds').innerHTML = seconds.toString() + "   Seconds";
    seconds++;
}
function endimageselect() {

    var persentage = mark / questions.length;

    if (persentage < .4) {
        document.getElementById('endimage').src = "endbad.svg";
    }
    else if (persentage < .4) {
        document.getElementById('endimage').src = "endavg.svg";
    }
    else {
        document.getElementById('endimage').src = "endgood.svg";
    }
    document.getElementById('endscore').innerHTML = "YOU GOT " + mark.toString() + " OUT OF " + questions.length;

}
