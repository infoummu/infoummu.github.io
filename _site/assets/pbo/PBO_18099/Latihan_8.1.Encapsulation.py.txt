class Mahasiswa:
    nama = ""
    __kelas = ""
    jurusan = ""
    def __init__(self, nama, kelas, jurusan):
        self.nama = nama
        self.__kelas = kelas
        self.jurusan = jurusan

    def tampil(self):
        print("Nama : ", self.nama)
        print("Kelas : ", self.__kelas)
        print("Jurusan : ", self.jurusan)

#objek
siswa1 = Mahasiswa("Vivi","3","Sistem Informasi")
siswa1.tampil()
print("Nama : ", siswa1.nama)