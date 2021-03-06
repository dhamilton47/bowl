<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

@include ('layouts.includes.head')

<body>
    <div id="app">
        @include ('layouts.includes.nav')

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-2">
                    @section('sidebar')
                        @include('sidebar')
                    @show
                </div>

                <div class="col-md-10">
                    @yield('content')
                </div>
            </div>
        </div>

        <flash message="{{ session('flash') }}"></flash>
    </div>

    @include ('layouts.includes.footer')

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    @yield('scripts')
</body>
</html>
