/**
 * Created by sinsky on 2017. 5. 24..
 */

var Hellow = React.createClass({
    render: function () {
        return(
            <h1>안녕! 난 리엑트로 생성 되었단다!</h1>
        );
    }
});

React.render(
        <div>
            <Hellow /><Hellow />
        </div>,
        document.getElementById('hellow')
    );