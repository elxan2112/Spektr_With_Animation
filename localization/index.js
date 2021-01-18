import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
    en:{
        toastText: 'Welcome Back!',
        drawer:{
            home: 'Home',
            news: 'News',
            entertainment: 'Entertainment',
            tools: 'Tools',
            aboutMe: 'About Me'
        },
        homeScreen:{
            mainText: 'Welcome to the best application in the world! We are glad to see you!',
            infoText: 'Swipe from left to right to view our menu!!!'
        },
        newsScreen:{
            spinnerText: 'Loading...',
        },
        entertainmentScreen:{
            entertainmentText: 'Entertainment',
            ejdahaMoviesText: 'Movies',
            movieFinder: {
                tabNavigation: {
                    searchScreen: 'Search',
                    favoriteScreen: 'Favorites'
                },
                searchHeader:{
                    logoText: 'Best Movies!',
                    inputText: 'input name of movie',
                    searchBtn: 'Search',
                    cleanSearchBtn: 'Clean search list'
                },
                searchMain: {
                    favoriteBtn: 'Add to favorit'
                },
                favorites: {
                    clearBtn: 'Clear all',
                    deleteBtn: 'Delete from favorite'
                },
            },
        },
        toolsScreen: {
            toolsText: 'Tools',
            ejdahaCalculatorText: 'Calculator',
            openBtn: 'Open'
        },
        aboutMeScreen:{
            tabNavigation:{
                profile: 'Profile',
                settings: 'Settings'
            },
            profileScreen:{
                name: 'Name: Ejdaha',
                surname: 'Surname: Shaurma',
                age: 'Years: 20'
            },
            settingsScreen: {
                mainInfo: 'This page is under construction!',
                otherInfo: 'Please be patient!'
            }
        },
        errorScreen:{
            errorCode: '404 Not Found!',
            errorText: 'Please check your internet connection and try again.'
        }        
    },
    ru:{
        toastText: 'С возвращением!',
        drawer:{
            home: 'Начальный экран',
            news: 'Новости',
            entertainment: 'Развлечения',
            tools: 'Инструменты',
            aboutMe: 'Обо мне'
        },
        homeScreen:{
            mainText: 'Добро пожаловать в лучшее приложение в мире! Мы рады вас видеть!',
            infoText: 'Потяните слево на право, чтобы открыть меню!!!'
        },
        newsScreen:{
            spinnerText: 'Загрузка...',
        },
        entertainmentScreen:{
            entertainmentText: 'Развлечения',
            ejdahaMoviesText: 'Фильмы',
            movieFinder: {
                tabNavigation: {
                    searchScreen: 'Поиск',
                    favoriteScreen: 'Избранные'
                },
                searchHeader:{
                    logoText: 'Лучшие фильмы!',
                    inputText: 'введите название фильма',
                    searchBtn: 'Поиск',
                    cleanSearchBtn: 'Очистить результат поиска'
                },
                searchMain: {
                    favoriteBtn: 'Добавить в избранное'
                },
                favorites: {
                    clearBtn: 'Очистить избранное',
                    deleteBtn: 'Удалить из избранного'
                },
            },
        },
        toolsScreen: {
            toolsText: 'Инструменты',
            ejdahaCalculatorText: 'Калькулятор',
            openBtn: 'Open'
        },
        aboutMeScreen:{
            tabNavigation:{
                profile: 'Профиль',
                settings: 'Настройки'
            },
            profileScreen:{
                name: 'Имя: Ejdaha',
                surname: 'Фамилия: Шаурма',
                age: 'Возраст: 20'
            },
            settingsScreen: {
                mainInfo: 'Страница находится в разработке!',
                otherInfo: 'Просим проявить терпение!'
            }
        },
        errorScreen:{
            errorCode: '404 Not Found!',
            errorText: 'Пожалуйста проверьте свое интернет соединение и попробуйте снова.'
        }
    }
})

export default strings