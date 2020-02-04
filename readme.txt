Witam
Funkcja writeBoards w pętli for uzupełnia nam tablicę losowymi cyframi z zakresu od 1 do 9
Funkcja horizontalle porównuje cyfry poziomo w poszczególnych tablicach i czy dana cyfra nie jest 0, jeżeli występują 3 lub 4 takie same cyfry zamienia je na 0
Funkcja veticalle robi to samo co poprzednia ale pionowo
Funkcja zeroUp  przesuwa powstałe zera do góry, iteruje po tablicy od dołu jazeli napotka 0 zamienia jego pozycję z elementem o takim samym indeksie ale znajdującym się w tablicy o takim samym indeksie -1.
Funkcja riddleSolver wykonuje się w pętli sprawdzając w pionie następnie w poziomie i przesuwając 0 do góry aż do momętu gdy ani w pionie ani w poziomie nie nastąpi zamiana na zero.