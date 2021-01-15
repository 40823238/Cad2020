var tipuesearch = {"pages": [{'title': 'About', 'text': '\n 倉儲 \n https://github.com/40823238/cad2020 \n 課程網站 \n http://mde.tw/cad2020/content/index.html \n 分組名單 \n http://mde.tw/cad2020/content/W3.html \n', 'tags': '', 'url': 'About.html'}, {'title': '進度', 'text': '', 'tags': '', 'url': '進度.html'}, {'title': 'hw1', 'text': 'pdf1 \n 1.\xa0\xa0 1.ipt (inventor)\xa0\xa0 1.stp (其他軟體 Ex:Solidworks，NX，MasterCAM等) \n \n 9.\xa0\xa0 9.ipt \xa0\xa0 9.stp \n \n 13.\xa0\xa0 13.ipt \xa0\xa0 13.stp \n \n 14.\xa0\xa0 14.ipt \xa0\xa0 14.stp \n \n 16.\xa0\xa0 16.ipt \xa0\xa0 16.stp \n \n 18.\xa0\xa0 18.ipt \xa0\xa0 18.stp \n \n 21.\xa0\xa0 21.ipt \xa0\xa0 21.stp \n \n 24.\xa0\xa0 24.ipt \xa0\xa0 24.stp \n \n 33.\xa0\xa0 33.ipt \xa0\xa0 33.stp \n \n 40.\xa0\xa0 40.ipt \xa0\xa0 40.stp \n \n \n pdf2 \n 2-1.\xa0\xa0 2-1.ipt \xa0\xa0 2-1.stp \n \n 2-2.\xa0\xa0 2-2.ipt \xa0\xa0 2-2.stp \n \n 2-3.\xa0\xa0 2-3.ipt \xa0\xa0 2-3.stp \n \n 組合2.\xa0\xa0 組合2.stl \xa0\xa0 組合2.iam \n \n \n', 'tags': '', 'url': 'hw1.html'}, {'title': '零件體積表', 'text': '\n', 'tags': '', 'url': '零件體積表.html'}, {'title': 'video', 'text': '\n', 'tags': '', 'url': 'video.html'}, {'title': 'W2', 'text': 'nxopen_getting_started_V12.pdf. \n /downloads/nx_python_examples.pdf \n \n', 'tags': '', 'url': 'W2.html'}, {'title': 'hw2-64', 'text': 'NX API \n 64天安門 \n # nx_open_part.py\n# 導入 NXOpen\nimport NXOpen\nimport NXOpen.UF\nimport NXOpen.Gateway\n    \ndef main():\n    # 取得目前開啟的工作階段\n    theSession = NXOpen.Session.GetSession()\n    theUfSession = NXOpen.UF.UFSession.GetUFSession()\n       \n    # 建立 ListingWindow\n    listWin= theSession.ListingWindow\n    # 開啟零件檔案\n    basePart1 = theSession.Parts.OpenBaseDisplay("y:/tmp/block.prt")\n    workPart = theSession.Parts.Work\n    unit1 = workPart.UnitCollection.FindObject("MilliMeter")\n    # height\n    p7 = workPart.Expressions.FindObject("p7")\n    # width\n    p8 = workPart.Expressions.FindObject("p8")\n    # length\n    p9 = workPart.Expressions.FindObject("p9")\n    workPart.Expressions.EditWithUnits(p7, unit1, "30")\n    workPart.Expressions.EditWithUnits(p8, unit1, "60")\n    workPart.Expressions.EditWithUnits(p9, unit1, "90")\n    theSession.UpdateManager.DoUpdate(0)\n    #saveStatus1 = workPart.SaveAs("y:/tmp/block_new.prt")\n    #saveStatus1.Dispose()\n    # initialize list to hold bodies\n    theBodyTags = []\n    \n    for x in workPart.Bodies:\n        if x.IsSolidBody:\n            theBodyTags.append(x.Tag)\n       \n    # 準備輸出 ASCII 格式 STL 零件檔案\n    sTLCreator1 = theSession.DexManager.CreateStlCreator()\n    sTLCreator1.AutoNormalGen = True\n    sTLCreator1.ChordalTol = 0.08\n    sTLCreator1.AdjacencyTol = 0.08\n    sTLCreator1.OutputFile = "y:\\\\tmp\\\\block_ascii.stl"\n    # Binary STL: NXOpen.STLCreatorOutputTypeEnum.Binary\n    sTLCreator1.OutputType = NXOpen.STLCreatorOutputTypeEnum.Text\n    # 已知 body1 命名\n    body1 = workPart.Bodies.FindObject("EXTRUDE(2)")\n    added1 = sTLCreator1.ExportSelectionBlock.Add(body1)\n    nXObject1 = sTLCreator1.Commit()\n    sTLCreator1.Destroy()\n   \n    # 開啟所建立的 ListingWindow\n    listWin.Open()\n    listWin.WriteLine("number of solid bodies: " + str(len(theBodyTags)))\n    \n    (massProps, Stats) = theUfSession.Modeling.AskMassProps3d(theBodyTags, len(theBodyTags), 1, 4, .03, 1, [0.99,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0])\n    listWin.WriteLine("units: kg, mm")\n    listWin.WriteLine("surface area: " + str(massProps[0]))\n    listWin.WriteLine("volume: " + str(massProps[1]*1E9))\n    # 在 ListingWindow 中寫入字串\n    listWin.WriteLine("Hello, NXOpen")\n    listWin.Close()\n      \n    # 將零件檔案 fit 之後, export 出 png 檔案\n    theUI = NXOpen.UI.GetUI()\n    imageExportBuilder1 = theUI.CreateImageExportBuilder()\n  \n    custombackgroundcolor1 = [None] * 3\n    custombackgroundcolor1[0] = 1.0\n    custombackgroundcolor1[1] = 1.0\n    custombackgroundcolor1[2] = 1.0\n  \n    imageExportBuilder1.SetCustomBackgroundColor(custombackgroundcolor1)\n    imageExportBuilder1.FileFormat = NXOpen.Gateway.ImageExportBuilder.FileFormats.Png\n    imageExportBuilder1.FileName = "y:\\\\tmp\\\\block.png"\n  \n    imageExportBuilder1.BackgroundOption = NXOpen.Gateway.ImageExportBuilder.BackgroundOptions.Original\n  \n    imageExportBuilder1.EnhanceEdges = False\n    imageExportBuilder1.RegionMode = False\n    # fit view 後 commit export png\n    workPart.ModelingViews.WorkView.Fit()\n    nXObject6 = imageExportBuilder1.Commit()\n  \n    imageExportBuilder1.Destroy()\n       \nif __name__ == "__main__":\n    main() \n \n', 'tags': '', 'url': 'hw2-64.html'}, {'title': 'hw2-Pyslvs_UI', 'text': '使用Pyslvs_UI繪製 \n \n \n', 'tags': '', 'url': 'hw2-Pyslvs_UI.html'}, {'title': 'hw3', 'text': '\n 程式碼 \n <robot_definition>\n<robot_dk name=kr162>\n<axis id="Base" maxvalue="0" minvalue="0" alpha="0" a="0" theta="0" d="0"/>\n<axis id="Joint1" limsup="185.000" liminf="-185.000" alpha="0.000" a="0.000" theta="90.000" d="640"/>\n<axis id="Joint2" limsup="380.000" liminf="-380.000" alpha="90.000" a="-260" theta="0.000" d="0.00"/>\n<axis id="Joint3" limsup="144.000" liminf="-100.000" alpha="0.000" a="1300.000" theta="-90.000" d="0.000"/>\n<axis id="Joint4" limsup="350.000" liminf="-350.000" alpha="-90.000" a="-55.000" theta="0.000" d="1025.000"/>\n<axis id="Joint5" limsup="120.000" liminf="-120.000" alpha="90.000" a="0.000" theta="0.000" d="0.000"/>\n<axis id="Joint6" limsup="350.000" liminf="-350.000" alpha="-90.000" a="0.000" theta="180.000" d="290.000"/>\n</robot_dk>\n<robot_geometry>\n<geometry geo="kuka kr16 assembly - base-2" name="Base" />\n<geometry geo="kuka kr16 assembly - rotary head-2" name="Joint1"/>\n<geometry geo="kuka kr16 assembly - lower arm-2" name="Joint2"/>\n<geometry geo="kuka kr16 assembly - upper arm-2" name="Joint3"/>\n<geometry geo="kuka kr16 assembly - p2-2" name="Joint4"/>\n<geometry geo="kuka kr16 assembly - WRIST-2" name="Joint5"/>\n</robot_geometry>\n<CAD_base x="0.000" y="0.000" z="0.000" rx="0.000" ry="0.000" rz="0.000"/>\n<CAD_scale FACTOR="1.000000000"/>\n<CAD_offsets cad_theta1="0.000" cad_theta2="0.000" cad_theta3="0.000" cad_theta4="0.000" cad_theta5="0.000" cad_theta6="0.000"/>\n<Angle_Type id="1"/>\n</robot_definition> \n', 'tags': '', 'url': 'hw3.html'}, {'title': '小組分工', 'text': '', 'tags': '', 'url': '小組分工.html'}, {'title': '名單', 'text': '分組倉儲: \xa0 https://github.com/40823246/cad2020bg4 分組網站: \xa0 http://40823246.github.io/cad2020bg4 \n Repository: \xa0 40823207 \xa0 | Site: \xa0 40823207 Repository: \xa0 40823208 \xa0 | Site: \xa0 40823208 Repository: \xa0 40823216 \xa0 | Site: \xa0 40823216 Repository: \xa0 40823218 \xa0 | Site: \xa0 40823218 Repository: \xa0 40823220 \xa0 | Site: \xa0 40823220 Repository: \xa0 40823224 \xa0 | Site: \xa0 40823224 Repository: \xa0 40823228 \xa0 | Site: \xa0 40823228 Repository: \xa0 40823238 \xa0 | Site: \xa0 40823238 Repository: \xa0 40823244 \xa0 | Site: \xa0 40823244 Repository: \xa0 40823246 \xa0 | Site: \xa0 40823246 \xa0 (組長) \n', 'tags': '', 'url': '名單.html'}, {'title': '參考影片', 'text': '\n', 'tags': '', 'url': '參考影片.html'}, {'title': '設計', 'text': 'ver.1 \n \n \n ver.2 \n \n', 'tags': '', 'url': '設計.html'}, {'title': '模擬', 'text': '偏心輪模擬 \n 問題:偏心倫可以轉，但滑塊會穿模噴飛，經過討論後原因可能是導軌跟軸沒有間隙的問題 \n \n 20210107 \n 軌道測試模擬(測試球能不能順暢通過軌道) \n \n 但修改間隙後，滑塊依然穿模噴飛，得知不是間隙問題。 \n \n 20210109 \n 修改導軌間隙 \n \n \n \n \n 20210114 \n 導軌噴飛修改。 \n 問題:只能行程一次，而且會歪歪的。 \n \n', 'tags': '', 'url': '模擬.html'}, {'title': '筆記', 'text': 'proxy更改 \n \n \n git push方式切換 \n \n', 'tags': '', 'url': '筆記.html'}, {'title': '心得', 'text': '這學期的課程不太一樣，偏向運用電腦來快速設計零件，並且用了很多不同的軟體，小組方面很像在做專題，大家分別做不同的部分，雖然過程不太順利，但是有了經驗。 \n \n', 'tags': '', 'url': '心得.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n', 'tags': '', 'url': 'Develop.html'}]};