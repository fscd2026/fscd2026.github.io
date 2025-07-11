


var map = L.map("map").setView([41.20665394902602, -8.627618732937401], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);






L.marker([41.15248685465911, -8.640777167680993])
    
    .addTo(map)
    .bindTooltip("<strong>Conference Venue</strong><br>Department of Computer Science of the Faculty of Sciences, University of Porto");
    




L.marker([41.15299253304126, -8.638681057897422])
    
    .addTo(map)
    .bindTooltip("<strong>Conference Lunches</strong><br>Círculo Universitário do Porto");
    




L.marker([41.24962816815652, -8.680562234544407])
    
    .addTo(map)
    .bindTooltip("<strong>Sá Carneiro</strong><br>Airport");
    




L.marker([41.23766112557824, -8.665218731916662])
    
    .addTo(map)
    .bindTooltip("<strong>Botica</strong><br>Metro Station");
    




L.marker([41.16077852924034, -8.628256955604366])
    
    .addTo(map)
    .bindTooltip("<strong>Casa da Música</strong><br>Metro Station");
    




L.marker([41.16109412767824, -8.629780468377888])
    
    .addTo(map)
    .bindTooltip("<strong>Casa da Música (Metro)</strong><br>Bus Station");
    




L.marker([41.153856568368546, -8.641302831755661])
    
    .addTo(map)
    .bindTooltip("<strong>Faculdade de Ciências FCUP1</strong><br>Bus Station");
    













L.polygon([[41.17355392033648, -8.689760636162292],[41.184536083682964, -8.642210439977502],[41.17965240943146, -8.632830800165294],[41.18595038058522, -8.603666037615914],[41.17632767319685, -8.56538681977061],[41.16740145538817, -8.570550832352001],[41.15643414971686, -8.558919284796486],[41.140107319419876, -8.575745504075824],[41.138576470646775, -8.618319226681932],[41.14716577096711, -8.640340117685088],[41.146400433426734, -8.675686470936315],[41.16842157656235, -8.691835124338631]], {color: '#ff6b6b'})
    
    .addTo(map)
    .bindTooltip("Porto City", {direction: 'center', offset: L.point({x: 0, y: 0})});
    









L.polygon([[41.267042620805384, -8.686883174954236],[41.24039286902647, -8.667485444297517],[41.22987193617576, -8.675296034960178],[41.23768211576218, -8.689543925619537]], {color: '#ff6b6b'})
    
    .addTo(map)
    .bindTooltip("Sá Carneiro Airport", {direction: 'center', offset: L.point({x: 0, y: 0})});
    


