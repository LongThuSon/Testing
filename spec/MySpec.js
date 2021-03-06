function testCoffee() {
    var listCoffee = [
        {
            stt: 1,
            name: 'Coffee truyền thống',
            cost: 10,
            quantity: 8    
        },
        {
            stt: 2,
            name: 'Coffee đen',
            cost: 10,
            quantity: 7    
        },
        {
            stt: 3,
            name: 'Coffee Latte',
            cost: 10,
            quantity: 10    
        },
        {
            stt: 4,
            name: 'Coffee Chồn',
            cost: 60,
            quantity: 9    
        },
        {
            stt: 5,
            name: 'Coffee Mocha',
            cost: 10,
            quantity: 0    
        }
    ];

    this.res = function(a, b) {
        var T = 50;
        var excessCash;
        
        switch (a) {
            case 1:
                if (listCoffee[0].quantity === 0 || b > (T / listCoffee[0].cost) || listCoffee[0].cost > T) 
                    excessCash = T;
                else excessCash = T - b * listCoffee[0].cost;
                break;
            case 2:
                if (listCoffee[1].quantity === 0 || b > (T / listCoffee[1].cost) || listCoffee[1].cost > T) 
                    excessCash = T;   
                else excessCash = T - b * listCoffee[1].cost;
                break;
            case 3:  
                if (listCoffee[2].quantity === 0 || b > (T / listCoffee[2].cost) || listCoffee[2].cost > T) 
                    excessCash = T;
                else excessCash = T - b * listCoffee[2].cost;
                break;
            case 4:
                if (listCoffee[3].quantity === 0 || b > (T / listCoffee[3].cost) || listCoffee[3].cost > T) 
                    excessCash = T;
                else excessCash = T - b * listCoffee[3].cost;
                break; 
            case 5:
                if (listCoffee[4].quantity === 0 || b > (T / listCoffee[4].cost) || listCoffee[4].cost > T) 
                    excessCash = T;
                else excessCash = T - b * listCoffee[4].cost;
                break;
            default:
                excessCash = T;
        }
        return excessCash;
    };
}

describe('Coffee', function() {
    var cal = new testCoffee();
    
    it('3 Coffee Latte, nhận lại 20 000', function() {
      expect(20).toBe(cal.res(3, 3));
    });

    it('Không nhận Coffee, nhận lại đủ 50 000', function() {
        expect(50).toBe(cal.res(3, 0));
    });
    
    it('1 Coffee Latte, nhận lại 40 000', function() {
        expect(40).toBe(cal.res(3, 1));
    });

    it('2 Coffee Latte, nhận lại 30 000', function() {
        expect(30).toBe(cal.res(3, 2));
    });

    it('4 Coffee Latte, nhận lại 10 000', function() {
        expect(10).toBe(cal.res(3, 4));
    });

    it('5 Coffee Latte, không được nhận tiền', function() {
        expect(0).toBe(cal.res(3, 5));
    });

    it('Không nhận Coffee, nhận lại đủ 50 000', function() {
        expect(50).toBe(cal.res(3, 6));
    });

    it('Không nhận Coffee, nhận lại đủ 50 000', function() {
        expect(50).toBe(cal.res(0, 3));
    });

    it('3 Coffee truyền thống, nhận lại 20 000', function() {
        expect(20).toBe(cal.res(1, 3));
    });

    it('3 Coffee đen, nhận lại 20 000', function() {
        expect(20).toBe(cal.res(2, 3));
    });

    it('Không nhận Coffee, nhận lại đủ 50 000', function() {
        expect(50).toBe(cal.res(4, 3));
    });

    it('Không nhận Coffee, nhận lại đủ 50 000', function() {
        expect(50).toBe(cal.res(5, 3));
    });

    it('Không nhận Coffee, nhận lại đủ 50 000', function() {
        expect(50).toBe(cal.res(6, 3));
    });
    
});

describe('Coffee: White box', function() {
    var cal = new testCoffee();
    
    it('(1, 7) -> 50', function() {
      expect(50).toBe(cal.res(1, 7));
    });

    it('(1, 2) -> 30', function() {
        expect(30).toBe(cal.res(1, 2));
    });
    
    it('(2, 9) -> 50', function() {
        expect(50).toBe(cal.res(2, 9));
    });

    it('(2, 4) -> 10', function() {
        expect(10).toBe(cal.res(2, 4));
    });

    it('(3, 6) -> 50', function() {
        expect(50).toBe(cal.res(3, 6));
    });

    it('(3, 1) -> 40', function() {
        expect(40).toBe(cal.res(3, 1));
    });

    it('(4, 2) -> 50', function() {
        expect(50).toBe(cal.res(4, 2));
    });

    it('(5, 3) -> 50', function() {
        expect(50).toBe(cal.res(5, 3));
    });

    it('(6, 4) -> 50', function() {
        expect(50).toBe(cal.res(6, 4));
    });
 
});