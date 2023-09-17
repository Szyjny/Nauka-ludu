## **Wstęp do css**

### **Parametry:**
---

-  `box-shadow` & `text-shadow` -> ustawia cień elementu, _[położenie poziome]_ _[położenie pionowe]_ _[rozmazanie]_ _[rozszerzenie {opcjonalne}]_ _[kolor]_
-  `transition` -> ustawia przejście pomiędzy stylami, [nazwa zmienianego parametru np `color`] [czas trwania zmiany stylu] {po przecinku można dodawać więcej parametrów}
-  `cursor` -> nadaje stan kursora podczas najechania na dany element

### **Funkcje:**
---

-  `linear-gradient()` -> funkcja stosowana w np `background`, służy do ustawiania gradientu, [kierunek gradientu {opcjonalne}{można napisać albo 'to left top', albo podać w stopniach wartość np '130deg'}] [kolor {można dodać jeszcze w "%" proporcję koloru"}]{można dać tyle ile ci się podoba}
-  `calc()` -> służy pd robienia obliczeń, nie można korzystać w tym z wartości typu `max-content`, trzeba podawać tylko liczby

### **Jednostki:**
---
-  `vh` & `vw` -> jednostki biorące pod uwagę wielkość ekranu ekranu, 100 daje cały widok ekranu
-  `svh` & `svw` -> z przeciwieństwie do jednostek powyżej ta bierze pod uwagę dodatkowe rzeczy jakie znajdujemy na przeglądarkach na telefonach, dzięki temu np footer-a nam nie utnie na urządzeniach mobilnych 
-  `%` -> ustawia szerokość względem swojego rodzica/elementu nadrzędnego
-  `rem` -> ustawia wielkość elementów z odwołaniem do wielkości czcionki użytkownika, 1 to bazowa wielkość czcionki użytkownika
-  `em` -> odwołuje sie do wielkości czcionki tekstu elementu rodzica, 1 to wartość czcionki rodzica

### **Stany Elementów:**
---

-  `::selection` -> style dla zaznaczonych elementów
-  `:hover` -> style dla najechanym elementów poprzez kursor
-  `:focus` -> jeżeli tabulacją najedziemy na ten element, wtedy uruchomi się ten styl
