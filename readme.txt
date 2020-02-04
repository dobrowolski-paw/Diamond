Witam
Funkcja writeBoards w pętli for uzupełnia nam tablicę losowymi cyframi z zakresu od 1 do 9
Funkcja horizontalle porównuje cyfry poziomo w poszczególnych tablicach i czy dana cyfra nie jest 0, jeżeli występują 3 lub 4 takie same cyfry zamienia je na 0
Funkcja veticalle robi to samo co poprzednia ale pionowo
Funkcja zeroUp  przesuwa powstałe zera do góry, iteruje po tablicy od dołu jazeli napotka 0 zamienia jego pozycję z elementem o takim samym indeksie ale znajdującym się w tablicy o takim samym indeksie -1.
Funkcja riddleSolver wykonuje się w pętli sprawdzając w pionie następnie w poziomie i przesuwając 0 do góry aż do momętu gdy ani w pionie ani w poziomie nie nastąpi zamiana na zero.
Tresc zadania
In brief:
● Write a function that will receive a two-dimensional array of integers in range
[1, 1000].
● The numbers of columns and rows should be in range [3, 50].
● If there are three or more of the same integers adjacent vertically or
horizontally, "remove" them from the board.
● Removed integers are represented by the value 0. If an empty space has
integers on top of itself, drop integers until they hit a non-zero value or the
very bottom of the board.
● The function should be repeated until there are no integers left to be removed.
After that, a stable board should be returned.
