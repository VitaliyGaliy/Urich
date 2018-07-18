Приложение состоит из приватных (закрытых) и публичных (открытых) роутов. Логика закрытых роутов (защищенных) и организована в специальном компоненте PrivateRoute, кторый содержит специальный метод render. Данный метод принимает функцию и выполняет ее каждый раз когда вызывается даный PrivateRoute с конкретным путем например - <PrivateRoute path="/news" component={News} />. В вышеуказанной функции происходит проверка на аутентификацию -
render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location }
                            }}
                        />
                    )
в результате которой рендерится либо переданный, защищенный компонент либо происходит редирект на pathname: "/login". При подключении ридакса через connect, роуты в App компоненте нужно обернуть в компонент 'Switch' так как в connect реализован shouldComponentUpdate метод а React router передает props через context-объект. Из-за чего не происходит re-render компонента. Второй вариант отключить проверку shouldComponentUpdate - connect(mapStateToProps, null, null, { pure: false })(PrivateRoute). Либо обернуть в компонент withRouter - withRouter(connect(mapStateToProps, null)(PrivateRoute)).

Аналогичная логика реализована в компоненте Login - 
                if (isAuthenticated) {
                            return <Redirect to={from} />;
                        }

Данные об аутентификации сохраняются в localStorage и проверяются перед построением дом дерева и подключением редакса -
const isAuthenticated = localStorage.getItem("isAuthenticated")
isAuthenticated && store.dispatch({ type: 'LOG_IN' })