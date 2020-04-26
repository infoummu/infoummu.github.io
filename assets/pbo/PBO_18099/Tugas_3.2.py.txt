#Jelaskan Fungsi Dari Masing-Masing Operator Bitwise

#&	Bitwise AND	x & y       : Berfungsi untuk mengatur setiap bit menjadi 1 jika kedua bit tersebut bernilai 1
#|	Bitwise OR	x | y       : Berfungsi untuk mengatur setiap bit menjadi 1 jika salah satu dari kedua bit adalah 1
#~	Bitwise NOT x ^ y       : Berfungsi untuk mengatur setiap bit menjadi 1 jika hanya satu dari kedua bit yang bernilai 1
#^	Bitwise XOR	~ x         : Berfungsi untuk menghindarai semua bit
#>>	Bitwise right shift	x>> : Berfungsi untuk menggeserkan deretan bit yang akan digeser kekanan sebanyak nilai yang ingin ditentukan
#<<	Bitwise left shift	x<< : Berfungsi untuk menggeserkan deretan bit yang akan digeser kekiri sebanyak nilai yang ingin ditentukan

#Buatlah sebuah contoh kasus dengan menggunakan operator tenary

#Pada bahasa pemrograman operator ternary menggunakan tanda tanya (?) dan titik dua (:).
#contoh : kondisi ? <nilai true> : <nilai false>

#Dalam Python bentuknya berbeda, yaitu menggunakann IF/ELSE dalam satu baris.

umur = input("berapa umur kamu?")
aku = "bocah" if umur < 10 else "dewasa"
print(aku)