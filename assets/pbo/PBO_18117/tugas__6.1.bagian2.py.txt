#method
class karyawan :
    ''' Dasar kelas untuk semua karyawan'''
    jumlah_karyawan = 0

    def __init__(self, nama, gaji):
        self.nama = nama
        self.gaji = gaji
        karyawan.jumlah_karyawan +=1
    def tampilkan__jumlah(self):
        print("Total karyawan:", karyawan.jumlah_karyawan)
