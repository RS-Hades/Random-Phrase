const base1 = ['La verdadera', 'La excitante', 'La horripilante', 'La alegre', 'La fatal', 
'La apasionante', 'La trágica', 'La sangrienta', 'La famosa', 'La gran', 
'La penosa', 'La triste', 'La desastrosa', 'La hermosa', 'La oscura', 
'La gloriosa', 'La infeliz', 'La emocionante', 'La fantástica', 'La terrorífica', 
'La aburrida',  'La increible', 'La desgraciada', 'La lamentable', 'La cómica',
'La miserable'];

const base2 = ['hazaña', 'reencarnación', 'batalla', 'existencia', 'muerte',
'misión', 'venganza', 'anécdota', 'vida', 'leyenda', 'historia', 'biografía'];

const base3 = ['de un bipolar', 'de un asesino', 'de un loco', 'de un adicto', 'de un soñador',
'de un símbolo sexual', 'de un alcoholico', 'de un guerrero', 'de un aventurero'];

const base4 = ['de una bipolar', 'de una asesina', 'de una loca', 'de una adicta', 'de una soñadora',
'de un símbolo sexual', 'de una alcoholica', 'de una guerrera', 'de una aventurera'];


function theBookOfMyLife (genre) {
    let largo1 = base1.length;
    let largo2 = base2.length;
    let largo3 = base3.length;
    let largo4 = base4.length;
    
    let getFirst = base1[Math.floor(Math.random() * largo1)];
    let getSecond = base2[Math.floor(Math.random() * largo2)];
    let getThird;
    
    if (genre === 'male') {
        getThird = base3[Math.floor(Math.random() * largo3)];        
    } else if (genre === 'female') {
        getThird = base4[Math.floor(Math.random() * largo4)];
    } else {
        return 'Enter a valid genre'
    };

    return 'The book of your life would be: ' + getFirst + ' ' + getSecond + ' ' + getThird
};

console.log(theBookOfMyLife('female'))