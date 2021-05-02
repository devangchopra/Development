from tkinter import *
from tkinter.messagebox import *
from tkinter.ttk import*
import sqlite3

class deletesub:
    def remove(self):
        s="delete from subjects where subjectname='"+self.cb1.get()+"'"
        self.cr.execute(s)
        self.conn.commit()
        showinfo("Time Table Managemet","Record Deleted Succesfully")
    def search(self):
        p="select *  from subjects where subjectname='"+self.cb1.get()+"'"
        self.cr = self.conn.cursor()
        self.cr.execute(p)
        ans=self.cr.execute(p)
        ans=self.cr.fetchone()
        self.txt1.insert(0,str(ans[0]))
    def __init__(self):
        self.root=Tk()
        self.root.geometry("400x400")
        p=["Select Subject Name"]
        self.conn=sqlite3.connect("mytimetabledata.sqlite3")
        s="select * from subjects"
        self.cr=self.conn.cursor()
        self.cr.execute(s)
        result=self.cr.fetchall()
        for r in result:
            p.append(r[1])
        self.lb1=Label(self.root,text="Subject Name")
        self.cb1=Combobox(self.root,values=p,state="readonly",text="Select Subject")
        self.cb1.current(0)
        self.bt1=Button(self.root,text="Search",command=self.search)
        self.lb2=Label(self.root,text="Code")
        self.txt1=Entry(self.root)
        self.bt2=Button(self.root,text="Delete",command=self.remove)
        self.lb1.grid(row=0,column=0)
        self.cb1.grid(row=0,column=1)
        self.bt1.grid(row=0,column=2)
        self.lb2.grid(row=1,column=0)
        self.txt1.grid(row=1,column=1)
        self.bt2.grid(row=2,column=1)
        self.root.mainloop()

#----------



