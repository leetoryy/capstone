import pymysql

child_conn = None
child_cur = None

child_conn = pymysql.connect(host='orion.mokpo.ac.kr',
                       port=8397,
                       user='root',
                       passwd='ScE1234**',
                       db='CHILD', 
                       charset='utf8')
child_cur = child_conn.cursor()

#=====

calle_conn = None
calle_cur = None

calle_conn = pymysql.connect(host='orion.mokpo.ac.kr',
                       port=8397,
                       user='root',
                       passwd='ScE1234**',
                       db='CALL_E', 
                       charset='utf8')
calle_cur = calle_conn.cursor()

#=====
counselor_conn = None
counselor_cur = None

counselor_conn = pymysql.connect(host='orion.mokpo.ac.kr',
                       port=8397,
                       user='root',
                       passwd='ScE1234**',
                       db='COUNSELOR', 
                       charset='utf8')
counselor_cur = counselor_conn.cursor()

#=====
survey_conn = None
survey_cur = None

survey_conn = pymysql.connect(host='orion.mokpo.ac.kr',
                       port=8397,
                       user='root',
                       passwd='ScE1234**',
                       db='SURVEY', 
                       charset='utf8')
survey_cur = survey_conn.cursor()