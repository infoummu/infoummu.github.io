class Mahasiswa:
    nama= ""
    __kelas= ""
    jurusan= ""
    def __init__(self, nama, kelas, jurusan):
        self.nama = nama
        self.__kelas = kelas
        self.jurusan = jurusan
    def tampil(self):
        print("Nama : ", self.nama)
        print("Kelas : ", self.__kelas)
        print("Jurusan : ", self.jurusan)

siswa1 = Mahasiswa("Fazlur", "Info 5", "Sistem Informasi")
siswa1.tampil()
#print("kelas : ", siswa1.kelas) #error karena mencoba mengakses dari luar