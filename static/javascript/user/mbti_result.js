const restartButton = document.querySelector(".js-restart"),
    resultImg = document.querySelector(".js-resultImg"),
    resultTitle = document.querySelector(".js-resultTitle"),
    ratings = document.querySelector(".js-ratings"),
    resultExplain = document.querySelector(".js-resultExplain"),
    bestMatchImg = document.querySelector(".js-bestMatchImg"),
    worstMatchImg = document.querySelector(".js-worstMatchImg");

const brainRate = ratings.querySelector(".js-brainRate"),
    powerRate = ratings.querySelector(".js-powerRate"),
    relRate = ratings.querySelector(".js-relRate");


const title_LIST = {
    "INTJ" : "조직의 우두머리",
    "ESTJ" : "조직의 2인자",
    "INFJ" : "조직의 후계자",
    "ISFJ" : "조직의 서포터",
    "ISTJ" : "조직의 감시자",
    "ISFP" : "조직의 이중스파이",
    "INFP" : "조직의 중재자",
    "ENFJ" : "조직의 통솔자",
    "ISTP" : "조직의 정보수집가",
    "INTP" : "조직의 설계자",
    "ENTJ" : "조직의 야망가",
    "ENFP" : "조직의 반항아",
    "ENTP" : "조직의 언변가",
    "ESTP" : "조직의 행동대장",
    "ESFP" : "조직의 분위기메이커",
    "ESFJ" : "조직의 대모"
};

const rating_LIST = [
    //INTJ
    [5, 4, 1],
    //ESTJ
    [4, 2, 3],
    //INFJ
    [5, 1, 4],
    //ISFJ
    [3, 1, 5],
    //ISTJ
    [4, 3, 2],
    //ISFP
    [3, 2, 4],
    //INFP
    [2, 2, 4],
    //ENFJ
    [3, 3, 5],
    //ISTP
    [4, 2, 2],
    //INTP
    [4, 2, 1],
    //ENTJ
    [5, 3, 2],
    //ENFP
    [2, 3, 5],
    //ENTP
    [3, 4, 2],
    //ESTP
    [2, 5, 4],
    //ESFP
    [1, 5, 5],
    //ESFJ
    [3, 2, 5],
];

const expain_LIST = [
    "조직의 우두머리이자 느와르 영화의 주인공인 당신은 회전력 빠른 두뇌와 철저한 계획으로 자신의 조직을 최고로 끌어올립니다. 사실 느와르 영화는 이 사람들을 위해 만들어졌다고 해도 과언이 아닐 정도로 당신은 느와르 영화 주인공에 잘 어울립니다. 고독하고, 냉철하며, 옳고 그름이 확실합니다. 감정에 잘 휘둘리지 않고 자신의 속마음을 남에게 잘 이야기 하지 않아 아끼던 조직원을 잃어도 별 반응을 보이지 않습니다. 때문에 당신의 조직원들은 당신을 두려워하기도 합니다만, 자신에게 감성적인 면도 있다는 사실은 스스로만이 알고있지요. 무언가를 해결해야 할 때면 다른 사람에게 조언을 구하기 보단 혼자서 해결책을 찾아내곤합니다. 이런 당신을 알고 있는 사람들이라면 당신에 대해 이렇게 말하죠. \"그를 함부로 건드려선 안돼. 그는 꼭 암살을 당해도 언제 그랬냐는 듯 살아돌아올 것 같단 말이야.\"",

    "계산적이고 합리적인 당신의 조직의 2인자, 보스의 오른팔입니다. 무언가를 감정적으로 판단하기 보다는 객관적으로 상황을 바라봅니다. 교묘하게 남을 조작하는 능력이 뛰어나기 때문에 다른 조직과 마찰이 일어나더라도 능력껏 상황을 타개합니다. 계획에 차질이 생기는 것을 매우 싫어하며, 마치 항해사처럼 조직을 자신이 생각하는 목표를 향해 몰고갑니다. 때론 보스의 결정이 탐탁지 않을 때도 있지만, 굳이 반기를 들지는 않습니다. 그렇지만 당신은 언제든 그를 자리에서 몰아내고 자신이 1인자가 될 가능성을 염두에 두고있습니다. 그만큼 당신에게는 리더의 자질이 있으며, 모두가 당신의 능력을 인정하고 당신 또한 그 사실을 인지하고 있습니다. 이런 당신을 알고 있는 사람들은 이렇게 말합니다. \"그가 등을 돌리면, 조직은 난파된 배처럼 수면 아래로 가라앉게 되겠지.\"",

    "보스가 죽자, 가장 먼저 거론된 것은 당신이었습니다. 사실 보스가 죽기 오래 전부터 당신에게는 이 조직의 후계자가 될 자질이 충분히 있었습니다. 겉으로는 유해보이고 한없이 착해보이지만 알고보면 모두가 놀랄만큼 유능하고 영악한 속내를 지니고 있습니다. 그렇기 때문에 당신의 이런 이면을 알지 못하는 사람들이 절대 선을 넘게 두지는 않습니다. 눈치가 빠르고 주위에 쉽게 적응합니다. 당신은 다정한 보스입니다만, 마음의 문을 쉽게 열지 않기 때문에 자신의 속내를 털어놓을 진정한 내 사람이 없는 고독한 보스이기도 합니다. 이런 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다. \"하룻강아지인 줄 알았는데, 알고보니 범이었단 사실을 그 누가 알았겠어.\"",

    "당신은 조직의 든든한 수호천사, 조직의 서포터입니다. 뛰어난 공감능력을 지닌 당신에게 조직원들은 알게 모르게 정신적으로 많이 의지합니다. 주로 밖을 돌아다니는 행동대장들과는 달리 당신은 주로 건물 내에서 회계를 담당하거나 다친 조직원들을 치료해주곤 합니다. 당신의 책임감과 헌신은 겉으로 보기엔 티가 나지 않지만 실제로는 조직에 큰 힘이 됩니다. 조직 내에서 의견이 갈리는 경우에는 다수의 의견에 따르는 경향이 있습니다만, 그것이 꼭 옳아서라기 보다는 다른 사람 앞에서 자신의 주장을 쉽게 펴지 못하는 성격 탓입니다. 하지만 그렇다고 해서 줏대가 없는 것은 아닙니다. 오히려 당신은 완고한 편에 속합니다. 이런 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다. \"그는 이쪽 세계에 있을 사람이 전혀 아닌데, 이상하게도 본인은 그걸 즐기는 듯 보인단 말이지.\"",

    "조직의 회계 담당자인 당신은 철저한 논리주의자이자 조직의 감시자입니다. 계획이 흐트러지는 것을 매우 싫어하는 당신은 혹여 원칙을 따르지 않는 조직원이 있는지 철저히 감시하는 역할을 수행합니다. 평소 자신의 속내를 털어놓는 것은 물론 타인에게 일말의 관심을 주는 것조차 않습니다. 때문에 종종 다른 조직원들과 갈등을 빚기도 합니다만, 모두가 당신의 능력을 익히 알고 있기에 그들이 먼저 한 발 물러서곤 합니다. 조직을 위해 일을 하기는 하나 헌신은 하지 않는 당신을 보며 믿음직 하지 않다고 여길 수도 있지만, 그 생각을 비웃기라도 하듯 당신은 조직을 배신하는 행동은 일절 하지 않습니다. 은근한 충신이라는 수식어가 어울려 보입니다. 당신을 알고 있는 사람들은 이렇게 말합니다. \"남 일에 관심이 많아질 수록 생각도 많아지는 법. 미련 없는 삶을 산다는 것은 큰 행운이야.\"",

    "당신은 사실 경찰에 의해 파견된 스파이였습니다만, 어느샌가 이곳의 진짜 조직원이 되어있었습니다. 현재는 조직의 이중 스파이로서 활동 중이었지요. 당신의 속내는 알아차리기 힘든 수수께끼이지만, 진심으로 다가오는 당신의 모습에 조직원들도 차츰 마음의 문을 열기 시작합니다. 평소에는 조용한 성격이지만 친한 사람들과 있을 때면 활발해지는 당신을 보고 많은 사람들은 미소를 짓습니다. 또한 당신이 자주 하곤 하는 칭찬들은 어느새 조직의 정신적인 지주가 되었습니다. 이런 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다. \"그는 알다가도 모르겠단 말이지. 여전히 내게도 난제로 남아있어.\"",

    "어떠한 갈등에 있어서 싸움보다는 조화를 이루고자 하는 당신은 조직의 중재자입니다. 이는 조직 내에서뿐만 아니라 조직간의 다툼이 벌어졌을 때도 마찬가지지요. 상황을 극단적으로 몰고가려는 의견이 우세하더라도 자신의 주장을 쉬이 굽히지 않습니다. 호불호가 확실하고 내면에는 정의를 추구하는 성향이 있기 때문입니다. 때론 지나치게 이상적인 의견을 제시할 때도 있지만, 조직원들의 반감을 사지는 않습니다. 겉으로는 나약하고 보호받아야 할 존재로 보여도 사실은 누구보다 강한 존재임을 차차 증명해 나갑니다. 이런 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다. \"그는 마치 어린아이 같아. 하지만 어린아이의 순수함은 그 누구도 이길 수 없다는 사실을 알아야 해.\"",

    "열정으로 가득한 당신은 조직의 통솔자입니다. 조직의 모든 사람과 가깝게 지내고자 노력합니다. 당신의 노력이 무색하지 않게, 많은 조직원들이 실제로 당신으로부터 많은 영감과 용기를 얻어갑니다. 눈치가 빠르고 상대방을 기분 좋게 하는 능력을 타고났기 때문에 조직 내에서 일어난 갈등 대부분이 당신의 손에서 와해되기도 합니다. 또한 사기가 꺾인 모두에게 동기를 부여해 조직을 위기에서 구해내는 구원자이기도 합니다. 보스가 당신을 신뢰한다는 사실을 알았을 때 당신은 뛸듯이 기뻤습니다. 당신이 이 모든 일을 행하는 이유는 거기에 있기 때문이죠. 이런 당신을 알고 있는 사람들은 이렇게 말합니다. \"그가 없었더라면 진작에 무너졌을 테지. 그는 영원히 쓰러지지 않는 기둥이나 다름없어.\"",

    "조직의 정보수집가인 당신에게 없는 정보란 없습니다. 다른 조직의 기밀은 물론 그곳의 조직원들에 대해서도 모든 것을 파악하고 있어 많은 도움이 되고 있습니다. 주로 혼자서 정보를 수집하러 다니며, 판단력과 관찰력이 좋아 신뢰도 높은 정보를 입수합니다. 조직 내에서는 과묵한 편입니다. 조직 내부에서 일어나는 모든 일에도 빠삭하지만, 나서서 해결책을 제시하지는 않습니다. 모두가 궁금한 것이 있으면 당신을 찾아오곤 하는데, 아지트에서 생활하는 모습은 취미생활을 즐길 때 빼고는 거의 보기 힘듭니다. 의외로 모험가형 기질이 있어 위험한 일도 주저하지 않고 항상 새로운 것을 찾아 떠나기 때문입니다. 또한 조직의 위계질서를 그닥 좋아하지 않는 자유로운 영혼이기 때문이기도 합니다. 당신에 대해 알고있는 사람들은 이렇게 말합니다. \"그는 모든 것을 알고있는데 정작 우리는 그에 대해 아는 것이 몇개 안된다는 사실은 어찌보면 불공평하지 않아?\"",

    "조직의 모든 시스템은 조직의 설계자인 당신의 손에서 탄생했습니다. 당신의 효율적인 계획과 당신이 가진 창의력은 조직이 도시의 지배자가 되는 데 큰 기여를 합니다. 다만 가장 어려운 것은 당신의 참여를 이끌어내는 것이겠지만요. 당신의 유능함을 진작부터 알아본 보스가 당신을 조직원으로 만들기까지 매우 오랜 기간 공을 들였다는 이야기도 있을 정도입니다. 만사가 귀찮으며 정해진 규율과 법칙을 싫어하기 때문입니다. 이러한 성격으로 인해 때로는 조직원들과 불화가 생기기도 합니다만, 당신은 다른 사람과의 관계에 대해서는 별로 개의치 않아 보입니다. 혼자 있기를 좋아하며, 자신만의 세계를 만들어나가는 것을 중요시 여깁니다. 지나친 몽상 안에서 위대한 발견을 이루는 사람입니다. 이러한 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다. \"그의 부지런한 버전이 있었다면 그는 이미 보스가 되고도 남았을걸.\"",

    "조직을 최고로 이끌어내고자 하는 당신. 조직의 야망가이자 조직의 중추신경입니다. 당신은 조직이 단지 골목대장 놀이를 하는 것에 만족하길 원치 않습니다. 당신의 야망은 조직이 도시의 지배자를 넘어서, 정치/경제/사회 전반을 장악할 힘을 갖는 것에 있습니다. 당신은 이 원대한 목표에 부합하지 않는 사람은 필요하지 않다고 말합니다. 설령 그것이 보스일지라도요. 꼭 그가 반역을 꿈꿔서라기 보단, 단지 조직이 성장하는 데 방해가 되는 잡초는 제거해야 하는 게 맞다고 생각하기 때문입니다. 그만큼 당신은 타고난 사업가이자 리더입니다. 당신의 체계적인 아이디어와 실행 능력은 누구도 대체할 수 없습니다. 문제가 발생하면 발벗고 나서 부딛히며, 새로운 사업에 도전하기를 두려워하지 않습니다. 이러한 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다 \"그가 손 댄 모든 것들은 열정으로 불타오르지. 하지만 그 뒤엔 항상 재가 남기 마련.\"",

    "조직의 반항아와도 같은 존재인 당신은 조직의 분위기 메이커 역할도 할 때가 많지만, 조직 생활을 그닥 좋아하지는 않는 인물입니다. 반항아라는 수식어는 평소에 일을 하기 싫어하기 때문이기도 하지만, 배신과 탐욕과 유혈사태가 난무하는 세계에 몸담고 있는 사람치고는 너무나도 평화주의자이기 때문입니다. 한번은 불쌍하다는 이유로 남몰래 인질을 풀어준 일도 있었습니다. 그런 당신에게 조직원들과의 유대 관계는 당신이 이쪽 세계에 남아있는 유일한 이유입니다. 그게 아니었다면 진작부터 이곳을 떠나 하고싶은 일들을 하며 유유자적한 생활을 했을 것입니다. 조직원들 또한 당신이 떠나길 바라지 않습니다. 그 무뚝뚝한 조직의 보스도 당신이 떠난다면 무척 슬퍼할 것입니다. 당신에 대해 알고 있는 사람들은 이렇게 말합니다. \"그 사람때문에 조직은 하루도 조용할 날이 없었지. 그게 웃음소리 때문이든 뭐든 간에 말야.\"",

    "화려한 언변과 카리스마로 상대를 압도하는 당신, 조직의 언변가입니다. 조직의 외교관과도 같은 존재인 당신은 주로 외부 조직과 협상하는 일을 도맡아서 하며, 이를 훌륭하게 해냅니다. 조금이라도 우리 조직에 유리한 조건을 통과시키고자 끝까지 뜻을 굽히지 않고 이를 얻어냅니다. 맘에 들지 않는 조건을 제시하는 상대를 비꼬는 능력이 탁월해 상대의 기분을 상하게 하는 일도 종종 일어나지만, 이 또한 협상의 전세가 당신쪽으로 기울게끔 하는 당신의 전략 중 하나입니다. 이러한 협상의 귀재인 당신은 조직에서 없어선 안될 핵심 인물입니다. 또한 평소에 같은 조직원들끼리의 농담 따먹기나 토론을 매우 즐기며, 조직 내의 분위기를 선도합니다. 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다 \"협상자리에 그가 나온다면, 십중팔구 금괴 한덩이는 빼앗기고 시작한다고 볼 수 있지.\"",

    "당신은 조직의 근육과도 같은 존재, 조직의 행동대장입니다. 조직 내에서 싸움실력으로 따지자면 일등 가는 사람 중 한명이며, 외부에서도 당신의 명성이 자자합니다. 도전정신이 뛰어나고 스포츠를 좋아해 조직의 경마 사업을 담당하고 있습니다. 다만, 일의 처리가 다소 과격한 면이 있으며 즉흥적인 성격을 가지고 있어 종종 보스의 속을 썩이기도 합니다. 그러나 다정다감함과 유쾌함은 미워할 수 없게 만드는 당신만의 매력입니다. 내 사람을 매우 아끼며 그들 또한 당신을 좋아하고 따릅니다. 일을 마친 후 조직원들과 함께하는 술자리에선 꼭 빠지는 법이 없습니다. 아마 조직원들 또한 당신이 빠진 술자리는 가고 싶지 않아할 것입니다. 당신에 대해서 알고있는 사람들은 이렇게 말합니다. \"그 조직이 운영하는 경마장에 가면, 두가지를 조심해야 하지. 하나는 말의 뒷발에 차이지 않는 것이고, 또 하나는 그의 눈 밖에 나지 않게 조심하는 것이지.\"",

    "조직의 분위기메이커인 당신이 없었다면, 이 조직은 매우 음울하고, 고독하고, 담배 연기만이 자욱한 곳이었을 겁니다. 영화의 씬스틸러같은 역할로, 일도 중요하지만 무엇보다 즐거움과 자유가 우선이라고 생각하는 사람입니다. 덕분에 조직원들 웃음소리의 팔할은 당신에 의한 것입니다만, 충동적인 성향이 강해 일을 그르칠 때도 많습니다. 조직의 행동대장 버금가게 제일 가는 싸움꾼이며, 매우 대담한 성격을 가지고 있습니다. 따라서 다른 조직과의 무력충돌을 두려워하지 않습니다. 이렇듯 조직 밖에서는 무시무시한 소문이 돌지만, 알고보면 순수한 내면을 가지고 있는 것이 반전 매력입니다. 당신을 알고 있는 사람들은 당신에 대해 이렇게 말합니다. \"총자루를 쥐고 웃는 모습에 모두가 경악을 했다지. 근데 알고보니 웃음을 참지 못하고 터트린 거였더군?\"",

    "조직의 정신적 지주이자 어머니와도 같은 존재인 당신은 조직의 대모입니다. 많은 조직원들, 심지어 보스조차도 당신에게 매우 많이 의지하며 당신으로부터 많은 조언을 구하기도 합니다. 실질적인 지식을 얻기 위함도 있지만, 정신적인 위안을 받고자하는 이유가 더 큽니다. 그만큼 상대방의 말을 잘 들어주는 성격입니다. 다른 조직과 대체적으로 우호적인 관계를 가지고 있습니다. 따라서 다른 조직과의 갈등이 생겨도 이를 좋게 해결하고자 하며, 상대 또한 당신을 봐서 참는다는 뉘앙스로 한발 물러납니다. 하지만 누군가 선을 넘는다면 냉정하게 돌변하며 참고만 있지는 않습니다. 나의 조직이 곧 나의 가족이라고 여기기 때문입니다. 당신을 알고 있는 사람들은 이렇게 말합니다. \"그는 조직을 절대 배신하지 않아. 만약 그렇게 된다면 그 조직은 무너지고 말거란 걸 아마 그 자신도 매우 잘 알고 있을 거야.\""
];

// "INTJ" : "조직의 우두머리",
// "ESTJ" : "조직의 2인자",
// "INFJ" : "조직의 후계자",
// "ISFJ" : "조직의 서포터",
// "ISTJ" : "조직의 감시자",
// "ISFP" : "조직의 이중스파이",
// "INFP" : "조직의 중재자",
// "ENFJ" : "조직의 통솔자",
// "ISTP" : "조직의 정보수집가",
// "INTP" : "조직의 설계자",
// "ENTJ" : "조직의 야망가",
// "ENFP" : "조직의 반항아",
// "ENTP" : "조직의 언변가",
// "ESTP" : "조직의 행동대장",
// "ESFP" : "조직의 분위기메이커",
// "ESFJ" : "조직의 대모"

const match_LIST = [
    {best : "ENFP", worst : "ESFJ"},
    {best : "ISFP", worst : "INFP"},
    {best : "ENTP", worst : "ISFP"},
    {best : "ESTP", worst : "ENFP"},
    {best : "ESFP", worst : "ENFJ"},
    {best : "ESTJ", worst : "INFJ"},
    {best : "ENTJ", worst : "ESTJ"},
    {best : "INTP", worst : "ISTJ"},
    {best : "ESFJ", worst : "ESTP"},
    {best : "ENFJ", worst : "ENTJ"},
    {best : "INFP", worst : "INTP"},
    {best : "INTJ", worst : "ISFJ"},
    {best : "INFJ", worst : "ESFP"},
    {best : "ISFJ", worst : "ISTP"},
    {best : "ISTJ", worst : "ENTP"},
    {best : "ISTP", worst : "INTJ"}
];

const USER_MBTI = "currentMBTI";

function handleRestart(){
    const link = '/user/mbti_home.html';
    location.href = link;
}

function ratingGreeting(idx){
    let fullStar = "", emptStar = "";

    for(let i = 0; i < parseInt(rating_LIST[idx][0]); i++){
        fullStar += "★";
    }
    for(let i = 0; i < 5 - parseInt(rating_LIST[idx][0]); i++){
        fullStar += "☆";
    }
    brainRate.innerText = "두뇌 " + fullStar + emptStar;

    fullStar = "", emptStar = "";
    for(let i = 0; i < parseInt(rating_LIST[idx][1]); i++){
        fullStar += "★";
    }
    for(let i = 0; i < 5 - parseInt(rating_LIST[idx][1]); i++){
        fullStar += "☆";
    }
    powerRate.innerText = "힘 " + fullStar + emptStar;

    fullStar = "", emptStar = "";
    for(let i = 0; i < parseInt(rating_LIST[idx][2]); i++){
        fullStar += "★";
    }
    for(let i = 0; i < 5 - parseInt(rating_LIST[idx][2]); i++){
        fullStar += "☆";
    }
    relRate.innerText = "대인관계 " + fullStar + emptStar;
}

function worstMatchGreeting(idx){
    worstMatchImg.src = "/images/" +  match_LIST[idx].worst + ".png";
}

function bestMatchGreeting(idx){
    bestMatchImg.src = "/images/" +  match_LIST[idx].best + ".png";
}

function resultGreeting(){
    let index = 0;
    const userMBTI = localStorage.getItem(USER_MBTI);

    resultImg.src = "/images/" + userMBTI +".png";
    for (let mbti in title_LIST){
        if(mbti == userMBTI){
            resultTitle.innerText = title_LIST[mbti];
            resultExplain.innerText = expain_LIST[index];
            
            ratingGreeting(index);
            bestMatchGreeting(index);
            worstMatchGreeting(index);

            return;
        }
        index++;
    }
}

function init(){
    resultGreeting();
    restartButton.addEventListener("click", handleRestart);
}

init();