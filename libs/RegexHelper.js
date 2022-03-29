/* 
    @Filename : index.html
    @Author : 구본아
    @Description : 네이버회원가입페이지 UI구현_유효성검사클래스
*/

class RegexHelper {

    // 미입력값 검사
    value(selector, msg) {
        const content = document.querySelector(selector).value;
        if (content == undefined || content == null || (typeof content == 'string' && content.trim().length == 0)) {
            throw new BadRequestException(selector, msg);
        }
        return true;
    };

    //비밀번호 재확인 검사
    compareTo(origin, compare, msg) {
        this.value(origin, msg);
        this.value(compare, msg);

        var src = document.querySelector(origin).value.trim();
        var dsc = document.querySelector(compare).value.trim();

        if (src != dsc) {
            throw new BadRequestException(origin, msg);
        }

        return true;
    };

    //생년월일의 탄생연도 확인
    checkBirtYear(selector) {
        const content = document.querySelector('#birth_year').value;
        const src = Number(content.trim());
        const date = new Date();
        let msg = '';

        if (src < 1922) {
            msg = '정말이세요?'
            throw new BadRequestException(selector, msg);

        } else if (src > 2008 && src < 2023) {
            msg = '만 14세 미만의 어린이는 보호자 동의가 필요합니다.'
            throw new BadRequestException(selector, msg);

        } else if (src > date.getFullYear()) {
            msg = '미래에서 오셨군요.^^'
            throw new BadRequestException(selector, msg);
        }
    }

    //select 선택 여부 확인
    checkOption(selector, msg) {
        const content = document.querySelector(selector);
        const checkedItem = content.selectedIndex;
        if (checkedItem == 0) {
            throw new BadRequestException(selector, msg);
        }
    };


    //////////////////////////////정 규 표 현 식 검사메서드//////////////////////////////////////////

    field(selector, msg, regexExpr) {
        this.value(selector, msg);

        const content = document.querySelector(selector).value;
        const src = content.trim();

        if (!regexExpr.test(src)) {
            throw new BadRequestException(selector, msg);
        }
        return true;
    };
    //전화번호 입력 확인
    phone(selector, msg) {
        return this.field(selector, msg, /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/);
    };
    checkDay(selector, msg) {
        return this.field(selector, msg, /^[1-3][0-9]$/);
    }
    checkPw(selector, msg) {
        //8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.
        return this.field(selector, msg, /^[a-zA-Z0-9!@#$%^&*()?_-]{8,20}$/)
    }

    checkId(selector, msg) {
        //5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.
        return this.field(selector, msg, /^[a-z0-9_-]{5,20}$/)
    }


























}