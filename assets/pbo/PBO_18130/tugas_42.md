***
### ringkasan tentang Dictionary
Dictionary adalah struktur data yang bentuknya seprti kamus. ada kata kunci kemudian ada nilainya.kata kunci harus unik,sedangkan nilai boleh diisi dengan apa saja.

***
###  contohnya 

```python 
aku = {
	"nama": "Petani Kode",
	"url:" "https://www.petanikode.com"
}  

```
pada contoh di atas kita membuat sebuah Dictionary bernama aku dengan isi data nama dengan URL.nama dan url adalah kunci(key) yang akn kita gunakan untuk mengakses nilai di dalamnya.
ini perbedaannya dibandingkan list dengan tuple.Dictionary memiliki kunci berupa teks,bisa juga angka.sedangkan list dan tuple menggunakan indeks berupa angka saja untuk mengakses nilainya

***
### ada 7 dasar yang harus diketahui tentang Dictionary pada python
1. Apa itu Dictionary pada python
2. membuat Dictionary
3. mengakses nilai item dari Dictionaey
4. mengubah nilai item Dictionary
5. mengubah item dari Dictionary
6. menambahkan item ke Dictionary
7. mengambil panjang Dictionary

***
### metode (Fungsi) Dictionary
1. clear() berfungsi untuk menghapus semua anggota dictionary
2. copy() berfungsi untuk mengembalikan shallow copy dari dictionary
3. fromkeys(seq[,v]) berfungsi untuk mrngembalikan dictionary baru dengan kunci-kuncinya seq,dan nilainya sama dengan v(defaultnya None)
4. items() berfungsi untuk mngembalikan view baru(berisi semua pasangan key,value dari dictionary)
5. keys() berfungsi untuk mngembalikan view baru (berisi semua kunci pada dictionary)
6. pop(key[,d]) berfungsi untuk menghapus anggota yang memiliki kunci dan mengembalikan nilai d jika kunci tidak ada didalam dictionary
7. popitem() berfungsi untuk menghapus anggota secara acak
8. setdefault(key[,d]) berfungsi bil key ada dalam dictionary, kembalikan nilainya
9. update([other]) berfungsi untuk mengupdate dictionary dengan menambahkan anggota dari dictionary lain other, timpa (overwrite) bila ada kunci yang sama
10. values() berfungsi untukmengembalikan view baru (berisi semua value pad dictionary)
