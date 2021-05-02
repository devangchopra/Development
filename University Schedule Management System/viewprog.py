import sqlite3
conn=sqlite3.connect("mytimetabledata.sqlite3")
from tkinter import *
from tkinter.ttk import *

class demo:
    def __init__(self):
        self.root=Tk()
        self.root.geometry("200x200")
        self.bt1=Button(self.root,text="View All programs" , command=self.show)
        self.lb=Listbox(self.root)


        self.bt1.pack()
        self.lb.pack()


        self.root.mainloop()
    def show(self):
        cr = conn.cursor()
        s = "select*from programs"
        cr.execute(s)
        ans = cr.fetchall()
        for r in ans:
            self.lb.insert(1,str(r[0]),str(r[1]))


#--------------