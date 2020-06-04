#__str__ ()
#Metode ini mengembalikan representasi string dari objek. 
#Metode ini disebut ketika fungsi print () atau str () dipanggil pada suatu objek.

#__repr__ ()
#Metode ini harus mengembalikan objek String. Jika kita tidak mengimplementasikan fungsi __str __ () untuk sebuah kelas, 
#maka implementasi objek bawaan digunakan yang sebenarnya memanggil fungsi __repr __ ().
#Fungsi __repr __ () mengembalikan representasi objek. Itu bisa berupa ekspresi python yang valid seperti tuple, kamus, string dll.
#Metode ini dipanggil ketika fungsi repr () dipanggil pada objek, 
#dalam hal ini, fungsi __repr __ () harus mengembalikan sebuah String jika tidak kesalahan akan dilempar.

