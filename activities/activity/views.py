from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import RequestContext

def index(request):
	return render( request, 'activity/list.html')

def single(request):
	return render( request,'activity/list_single.html')