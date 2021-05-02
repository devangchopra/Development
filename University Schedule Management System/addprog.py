import sqlite3
from tkinter import*
from tkinter.messagebox import showinfo
from tkinter.ttk import *


class addprogram:
    def __init__(self):
        self.root=Tk()
        self.lb1=Label(self.root,text="Enter Programme Name")
        self.lb2=Label(self.root,text="Enter Description")

        self.txt1=Entry(self.root)
        self.txt2=Entry(self.root)
        self.bt1=Button(self.root,text="Add",command=self.test)
        self.lb1.grid(row=0,column=0)
        self.txt1.grid(row=0,column=1)
        self.lb2.grid(row=1,column=0)
        self.txt2.grid(row=1,column=1)
        self.bt1.grid(row=2,column=1)
        self.root.mainloop()
    def test(self):
        if self.txt1.get()=="" or self.txt2.get()=="":
            showinfo("","Cannot Leave Program or Description name blank")
        else:
            conn = sqlite3.connect("mytimetabledata.sqlite3")
            ps = "select * from programs"
            cr = conn.cursor()
            cr.execute(ps)
            ans = cr.fetchall()
            flag = False
            for r in ans:
                if (str(r[0]).upper()) == self.txt1.get().upper():
                    flag = True
                    break
            if flag == True:
                showinfo("", "Duplicate Course Name")
            else:
                m = "insert into programs values ('" + self.txt1.get() + "' , '" + self.txt2.get() + "' )"
            cr.execute(m)
            conn.commit()
            showinfo("", "Programm Added Succesfully")

