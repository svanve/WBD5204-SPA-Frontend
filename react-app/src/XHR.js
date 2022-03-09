export default class XHR {

    constructor() {
        this.bindErrorEventHandler = this.bindErrorEventHandler.bind( this );
        this.bindSuccessEventHandler = this.bindSuccessEventHandler.bind( this );
        this.bindProgressEventHandler = this.bindProgressEventHandler.bind( this );
        this.onLoad = this.onLoad.bind( this );
        this.onProgress = this.onProgress.bind( this );

        this.Request = new XMLHttpRequest();
        this.token = this.getToken();

        this.Request.onload = this.onLoad;
        this.Request.upload.addEventListener( 'progress', this.onProgress );
    }

    get( url ) {
        this.Request.open( 'GET', url );
        this.Request.setRequestHeader( 'AUTHORIZATION', this.token );
        this.Request.send();
    }

    post( url, data ) {
        this.Request.open( 'POST', url );
        this.Request.setRequestHeader( 'AUTHORIZATION', this.token );
        this.Request.send( data );
    }

    delete( url ) {
        this.Request.open( 'DELETE', url );
        this.Request.setRequestHeader( 'AUTHORIZATION', this.token );
        this.Request.send();
    }

    update( url, data ) {
        this.Request.open( 'PUT', url );
        this.Request.setRequestHeader( 'AUTHORIZATION', this.token );
        this.Request.send( data );
    }

    bindErrorEventHandler( callback  ) {
        this.errorEventHandler = callback;
    }

    bindSuccessEventHandler( callback  )  {
        this.successEventHandler = callback;
    }

    bindProgressEventHandler( callback  )  {
        this.progressEventHandler = callback;
    }

    onLoad() {
        switch( this.Request.status ) {
            case 200:
                if ( this.successEventHandler ) {
                    this.successEventHandler( this.Request );
                    console.log( this.Request.responseText );
                }
                break;
            case 400:
                if ( this.errorEventHandler ) {
                    this.errorEventHandler( this.Request );
                    console.log( this.Request.responseText );
                }
                break;
            default:
                break;
        }

        this.updateToken( JSON.parse( this.Request.responseText ) );
    }

    onProgress( event  ) {
        if ( this.progressEventHandler ) {
            this.progressEventHandler( event );
        }
    }

    deleteToken()  {

        this.delete_cookie( 'JWT', '/', 'http://localhost:8080' );
    }

    getToken() {
        // @ts-ignore
        const cookies = document.cookie.split('; ').find(row => row.startsWith('JWT='));

        return cookies !== undefined ? cookies.split('=')[1] : null;
    }

    updateToken( response )  {
        const jwt = response[ 'jwt' ];

        if ( jwt !== undefined ) {
            let date = new Date();
            date.setTime(date.getTime()+(5*60*1000));
            // @ts-ignore
            const expires = "expires="+date.toGMTString();

            console.log( expires );

            document.cookie = 'JWT=AUTHORIZE ' + jwt + ';path:/;domain:http://localhost:8080;' + expires;
        }
    }

    delete_cookie( name, path, domain ) {
        if( this.get_cookie( name ) ) {
            document.cookie = name + "=" +
                ((path) ? ";path="+path:"")+
                ((domain)?";domain="+domain:"") +
                ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        }
    }

    get_cookie(name){
        return document.cookie.split(';').some(c => {
            // @ts-ignore
            return c.trim().startsWith(name + '=');
        });
    }

}
