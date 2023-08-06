var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {

    $scope.companies = [
        {
            id:1,
            name:'As Adana',
            logo:'/src/img/companies/asadana.png'
        },
        {
            id:2,
            name:'As Tur',
            logo:'/src/img/companies/as.png'
        },
        {
            id:3,
            name:'Ulusoy',
            logo:'/src/img/companies/ulu.png'
        },
        {
            id:4,
            name:'Rota',
            logo:'/src/img/companies/rota.png'
        },
        {
            id:5,
            name:'Nevsehir',
            logo:'/src/img/companies/new.png'
        },
        {
            id:6,
            name:'Kamil Koc',
            logo:'/src/img/companies/kamil.png'
        },
        {
            id:7,
            name:'Efe Tur',
            logo:'/src/img/companies/efe.png'
        },

    ]

    $scope.popular_routes=[
        {
            start:'İstanbul',
            end:'Çanakkale',
            start_price:'280'
        },
        {
            start:'İstanbul',
            end:'Ankara',
            start_price:'350'
        },
        {
            start:'İstanbul',
            end:'İzmir',
            start_price:'170'
        },
        {
            start:'İstanbul',
            end:'Çanakkale',
            start_price:'280'
        },
        {
            start:'İstanbul',
            end:'Ankara',
            start_price:'350'
        },
        {
            start:'İstanbul',
            end:'İzmir',
            start_price:'170'
        },
        {
            start:'İstanbul',
            end:'Çanakkale',
            start_price:'280'
        },
        {
            start:'İstanbul',
            end:'Ankara',
            start_price:'350'
        },
        {
            start:'İstanbul',
            end:'İzmir',
            start_price:'170'
        },
    ]

    $scope.popular_cities=['İstanbul','Ankara','İzmir','Antalya','Erzurum','Adana','Diyarbakır','Mersin','Malatya']
});