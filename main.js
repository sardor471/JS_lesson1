// let x = 2;
// let Y = 3*x**6-6*x**2-7;
// console.log("Y Funksiyaning qiymati:", Y)




// begin 1
let a = 5;
let b = 10;
let S = a*b;
let P = 2*(a+b)
console.log("To'g'ri to'rtburchak yuzasi:", S, "To'g'ri to'rtburchak perimetri:", P)

// begin 2
let d = 5;
let pi = 3.14;
let l = pi*d;
let r = d/2;
let s = pi*r**2;
console.log("Aylana uzunligi:", l, "Aylana yuzasi:", S)

// begin 3
let a1 = 10;
let v = a1**3;
let s1 = 6*a**2;
console.log("Kubning xajmi:", v, "Kubning sirti:", s)

// begin 4
let a2 = 2;
let d2 = 3;
let c2 = 4;
let v2 = a2*d2*c2;
let s2 = 2*(a2*d2+d2*c2+a2*c2)
console.log("Paralelipipedning hajmi:", v2, "Paralelipipedning tola sirti:", c2)

// begin 5
let a3 = 5;
let b3 = 6;
let m = (a+b)/2;
console.log("a va b ning orta arifmetigii:", m)

// begin 6
let a4 = 4
let b4 = 5
let c = (a4**2 + b4**2) ** 1/2
let p = a4 + b4 + c
console.log("Uchburchakning gipotenuzasi:", c, "Uchburchakning perimetri:", p)

// begin 7
let r1 = 25
let r2 = 20
let c1 = pi+r1
let c3 =  pi+r2
let s3 = pi*(r1**2 - r2**2)
console.log("Aylana yuzalari ayirmasi:", s3)

// begin 8
let r3 = 6
let l1 = 2*pi*r3
let s4 = pi*r3**2
console.log("Aylana radiusi:", l1, "Aylana yuzasi:", s4)

// begin 9
let x1 = 15
let x2 = 10
let y1 = 8
let y2 = 6
let l2 = ((x1 - x2)**2 + (y1 - y2)**2) ** 1/2
console.log("Tekislikdagi ikki nuqtaning masofasi:", l2)

// begin 10
let a5 = 10;
let b5 = 20;
let c4 = 30;
[a5, b5] = [b5, a5];
[b5, c4] = [c4, b5];
[c4, a5] = [a5, c4];
console.log(a5, b5, c4)

// begin 11
let x3 = 7;
let y3 = 4*(x3-3)**6-7*(x3-3)**3+2;
console.log("Y funksiyaning qiymati:", y3)

// begin 12
let a6 = 2;
console.log("A ning darajalari:", a6**2, a6**6, a6**9, a6**15)

// begin 13
let tf = 60;
let tc = (tf-32)*5%9
console.log(tc)

// begin 14
let x4 = 10;
let a7 = 40;
let y4 = 10;
let b7 = 30;
let m1 = (a7/x4)-(b7/y4);
console.log(m1) 

// begin 15
let x5 = 4;
let a8 = 6;
let y5 = 6;
let b8 = 8;
let m2 = x5*a8 + y5*b8;
console.log("Abdulaziz jami qilgan savdosi:", m2)

// integer 1
let number = 946;
let birlik = number%10;
let onlik = parseInt(number/10)%10;
console.log(birlik, onlik)

// integer 2
let N = 356
let Nyuzlik = parseInt(N/100);
let Nonlik = parseInt(N/10)%10;
let Nbirlik = N%10;
console.log(Nyuzlik, Nonlik, Nbirlik, Nbirlik + Nonlik + Nyuzlik)

// integer 3
let g = 345
let gyuzlik = parseInt(g/100);
let gonlik = parseInt(g/10)%10;
let gbirlik = g%10;
console.log("345:", gbirlik, gonlik, gyuzlik,)

// integer 4
let j = 454
let jyuzlik = parseInt(j/100);
let jonlik = parseInt(j/10)%10;
let jbirlik = j%10;
console.log("454:", jonlik, jyuzlik, jbirlik)

// integer 5
let h = 723
let hyuzlik = parseInt(h/100);
let honlik = parseInt(h/10)%10;
let hbirlik = h%10;
console.log("723:", hyuzlik, hbirlik, honlik)

// integer 6
let n = 54598
let nminglik = parseInt(n/1000)%10;
console.log("54598:", nminglik)

// integer 7
let n1 = 748
let n1minut = parseInt(n1/60);
console.log("748 sekund=", n1minut)

// integer 8
let o = 563563
let osoat = parseInt(o/3600)
console.log("563563 sekund =", osoat, "- soat")

// integer 9
let o1 = 9623
let o1minut = parseInt(o1/60);
let o1sekund = o1%60;
console.log("9623 sekund=", o1minut, "minut", o1sekund, "sekund")

// integer 10
let t = 7294
let tsoat = parseInt(t/3600);
let tsekund = t%60;
console.log("7294 sekund=", tsoat, "soat", tsekund, "sekund")


// boolean 1
let q = 42;
console.log("42>5 -", q>5)

// boolean 2
let q1 = 8;
console.log("8>5", q1>5)

// boolean 3
let i = 4;
let u = 1;
console.log("4>2 -", i>2, "1<=3 -", u<=3)

// boolean 4
let i1 = 52;
let u1 = 65;
let p1 = 65;
console.log("52<=65<=65 -", i1<=u1<=p1)

// boolean 5
console.log("3"!=4)

// boolean 6
console.log("3"!=6!=-12)

// boolean 7
// && - (and) operatori. Ikta (yoki undan kop) sshartning barchasi rost bolsa natija true boladi. Agar bitta shartxam notogri bolsa folse boladi.
let k = 234
let kyuzlik = parseInt(k/100);
let konlik = parseInt(k/10)%10;
let kbirlik = k%10;
let k1 = (kyuzlik !== konlik)&&(kyuzlik !== kbirlik)&&(konlik !== kbirlik)     
console.log(k1)

// boolean 8
// || - (or) operatori. Ikta (yoki undan kop) shartdan xech bolmaganda bittasi rost bolsa natija true boladi. Agar barcha shartlar notogri bolsa natija folse boladi.
let w = 5
let y = 8
let z = 5
let h1 = (w === y) || (w === z) || (y === z)
console.log(h1)

