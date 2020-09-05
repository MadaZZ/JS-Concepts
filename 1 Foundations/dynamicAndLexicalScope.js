'use strict'

const a = function (){
    console.log('a', this);

    const b = function(){
        console.log('b', this);

        const c = {
            hello: function(){
                console.log('c', this);
            }
        }
        c.hello();
    }
    b();
}

a();