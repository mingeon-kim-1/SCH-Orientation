/**
 * Synonym dictionary for Q2 ("AI 하면 처음 떠오르는 단어는?")
 * Keys: lowercase variant strings
 * Values: canonical display form
 */
var SYNONYMS = {
  // AI assistants & models
  'chatgpt': 'ChatGPT',
  '챗지피티': 'ChatGPT',
  '지피티': 'ChatGPT',
  'gpt': 'ChatGPT',
  '챗gpt': 'ChatGPT',
  'gpt-4': 'ChatGPT',
  'gpt4': 'ChatGPT',
  'gpt-4o': 'ChatGPT',
  'gpt-5': 'ChatGPT',
  'gpt5': 'ChatGPT',
  '클로드': 'Claude',
  'claude': 'Claude',
  'opus': 'Claude',
  '오퍼스': 'Claude',
  '제미나이': 'Gemini',
  'gemini': 'Gemini',
  '코파일럿': 'Copilot',
  'copilot': 'Copilot',
  '클로바': 'Clova',
  'clova': 'Clova',
  '네이버클로바': 'Clova',
  '빅스비': 'Bixby',
  'bixby': 'Bixby',
  '삼성빅스비': 'Bixby',
  '시리': 'Siri',
  'siri': 'Siri',
  '뤼튼': '뤼튼',
  'wrtn': '뤼튼',
  'chatbot': '챗봇',
  '챗봇': '챗봇',

  // AI image/video tools
  '달리': '달리',
  'dall-e': '달리',
  'dalle': '달리',
  '미드저니': 'Midjourney',
  'midjourney': 'Midjourney',
  '소라': 'Sora',
  'sora': 'Sora',
  '스테이블 디퓨전': 'Stable Diffusion',
  'stable diffusion': 'Stable Diffusion',

  // Voice assistants
  '알렉사': 'Alexa',
  'alexa': 'Alexa',

  // General AI terms
  '인공지능': 'AI',
  '에이아이': 'AI',
  'ai': 'AI',
  '로봇': '로봇',
  '알파고': 'Alpha고',
  'alphago': 'Alpha고',
  '딥러닝': '딥러닝',
  'deep learning': '딥러닝',
  '머신러닝': '머신러닝',
  'machine learning': '머신러닝',
  '자동화': '자동화',
  'automation': '자동화',
  '코딩': '코딩',
  'coding': '코딩',
  '프로그래밍': '코딩',

  // Companies
  '구글': 'Google',
  'google': 'Google',
  '마이크로소프트': 'Microsoft',
  'microsoft': 'Microsoft',
  'ms': 'Microsoft',
  '네이버': '네이버',
  'naver': '네이버',
  '카카오': '카카오',
  'kakao': '카카오',
  'kakaotalk': '카카오',
  'kakao talk': '카카오',
  '카카오톡': '카카오',
  '카톡': '카카오',
  '삼성': '삼성',
  'samsung': '삼성',
  '애플': 'Apple',
  'apple': 'Apple',
  'openai': 'OpenAI',
  '오픈에이아이': 'OpenAI',
  '오픈ai': 'OpenAI',
  '앤트로픽': 'Anthropic',
  'anthropic': 'Anthropic',
  '메타': 'Meta',
  'meta': 'Meta',

  // Models
  '라마': 'LLaMA',
  'llama': 'LLaMA',

  // People
  '일론머스크': 'Elon Musk',
  '머스크': 'Elon Musk',
  'elon musk': 'Elon Musk',
  '샘 알트만': 'Sam Altman',
  '샘알트만': 'Sam Altman',
  'sam altman': 'Sam Altman',
  '일론': 'Elon Musk',
  'elon': 'Elon Musk',

  // xAI
  '그록': 'Grok',
  'grok': 'Grok',

  // Concepts & feelings
  '터미네이터': '터미네이터',
  'terminator': '터미네이터',
  '영화': '영화',
  'movie': '영화',
  '편리': '편리',
  '편리함': '편리',
  '편해': '편리',
  '편하다': '편리',
  '편한': '편리',
  '미래': '미래',
  'future': '미래',
  '무서움': '무서움',
  '무서운': '무서움',
  '두려움': '무서움',
  '두려운': '무서움',
  '대화': '대화',
  '대화형': '대화',
  '검색': '검색',
  'search': '검색',
  '번역': '번역',
  'translation': '번역',
  '그림': '이미지',
  '이미지': '이미지',
  'image': '이미지',
  '음악': '음악',
  'music': '음악',

  // Student reactions & concepts
  '신기': '신기',
  '신기한': '신기',
  '신기함': '신기',
  '똑똑': '똑똑',
  '똑똑한': '똑똑',
  '스마트': '똑똑',
  'smart': '똑똑',
  '위험': '위험',
  '위험한': '위험',
  'dangerous': '위험',
  '과제': '과제',
  '숙제': '과제',
  '레포트': '과제',
  '일자리': '일자리',
  '취업': '일자리',
  '직업': '일자리',
  '자율주행': '자율주행',
  'self driving': '자율주행',
  '딥페이크': '딥페이크',
  'deepfake': '딥페이크',
  '스카이넷': '스카이넷',
  'skynet': '스카이넷',

  // Bootcamp tools
  '커서': 'Cursor',
  'cursor': 'Cursor',
  '퍼플렉시티': 'Perplexity',
  'perplexity': 'Perplexity',
  '노션': 'Notion',
  'notion': 'Notion'
};

/**
 * Normalize a user-submitted word:
 *  1. Trim whitespace
 *  2. Lowercase for lookup
 *  3. Return canonical form if found, otherwise return original input
 */
function normalizeWord(input) {
  if (!input) return '';
  var trimmed = input.trim();
  var key = trimmed.toLowerCase();
  if (SYNONYMS.hasOwnProperty(key)) {
    return SYNONYMS[key];
  }
  return trimmed;
}

/**
 * Synonym dictionary for Q6 ("요즘 가장 많이 쓰는 앱은?")
 */
var SYNONYMS_Q6 = {
  '인스타': '인스타그램', '인스타그램': '인스타그램', 'instagram': '인스타그램', 'insta': '인스타그램',
  '유튜브': '유튜브', 'youtube': '유튜브', 'yt': '유튜브',
  '틱톡': '틱톡', 'tiktok': '틱톡',
  '카톡': '카카오톡', '카카오톡': '카카오톡', 'kakaotalk': '카카오톡', 'kakao talk': '카카오톡',
  '트위터': 'X', 'twitter': 'X', 'x': 'X', '엑스': 'X',
  '넷플릭스': '넷플릭스', 'netflix': '넷플릭스',
  '페이스북': '페이스북', 'facebook': '페이스북', 'fb': '페이스북',
  '쿠팡': '쿠팡', 'coupang': '쿠팡',
  '배달의민족': '배민', '배민': '배민', 'baemin': '배민',
  '당근': '당근', '당근마켓': '당근',
  '토스': '토스', 'toss': '토스',
  '챗지피티': 'ChatGPT', 'chatgpt': 'ChatGPT', 'gpt': 'ChatGPT', '챗gpt': 'ChatGPT',
  '뤼튼': '뤼튼', 'wrtn': '뤼튼',
  '네이버': '네이버', 'naver': '네이버',
  '카카오': '카카오', 'kakao': '카카오',
  '사파리': 'Safari', 'safari': 'Safari',
  '크롬': 'Chrome', 'chrome': 'Chrome',
  '디스코드': '디스코드', 'discord': '디스코드',
  '노션': 'Notion', 'notion': 'Notion'
};

/**
 * Normalize a user-submitted app name for Q6
 */
function normalizeWordQ6(input) {
  if (!input) return '';
  var trimmed = input.trim();
  var key = trimmed.toLowerCase();
  if (SYNONYMS_Q6.hasOwnProperty(key)) {
    return SYNONYMS_Q6[key];
  }
  return trimmed;
}
