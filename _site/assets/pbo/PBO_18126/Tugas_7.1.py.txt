#Fungsi str() berfungsi untuk mengubah objek menjadi string
#Fungsi str() memiliki sintaks sebagai berikut

str(object = '')
str(object = b'', encoding='utf-8', errors = 'strict')

#Fungsi str() memiliki beberapa parameter, yaitu

#object – object yang akan dikonversi menjadi string
#encoding – encoding, defaultnya utf-8
#errors – respon error saat terjadi kesalahan decoding, defaultnya strict


#Fungsi repr() berfungsi untuk mengembalikan representasi dari suatu objek

repr(object)
#Mengembalikan string yang berisi representasi objek yang dapat dicetak. untuk banyak tipe,
#fungsi ini berusaha untuk mengembalikan string yang akan menghasilkan objek dengan nilai yang sama ketika diteruskan ke eval(), 
#jika tidak, representasi adalah string yang tertutup kurung sudut yang berisi nama jenis objek bersama dengan informasi 
#tambahan seringkali termasuk nama dan alamat objek.Kelas dapat mengontrol apa fungsi ini yang dikembalikan untuk instance-nya dengan 
#mendefinisikan metode __repr__().