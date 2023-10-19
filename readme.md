### Esercizio

Scrivere un programma che chieda all’utente:
- Nome e Cognome
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- va generato un numero random univoco come PNR
- va generato un numero random univoco per indicare il numero della carrozza
- va stampato il biglietto

### Dati

1. Form: chiedere ad utente le info quali:
   Nome e cognome; 
   Età;
   kilometri totali
2. Scontistica: 20% per i minorenni, 40% per i pensionati;

### Logica: 
1. Moltiplicare il nKm per 0.21 per ottenere il prezzo del biglietto; 
2. Determinare se l'età dell'utente è <18 oppure >65 per applicare lo sconto; 
3. SE l'età dell'utente è <18: PrezzoBiglietto * 0.20 = scontoTotale1; poi, PrezzoBiglietto - scontoTotale1  = Prezzo con sconto
4. Generare un numero random come PNR
5. generare un numero random univoco da 1 a 11 per determinare il numero della carrozza;
6. Generare un numero random univoco da 1 a 42 per determinare il posto a sedere

