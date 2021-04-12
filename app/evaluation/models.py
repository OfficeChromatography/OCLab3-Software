from django.db import models
from django.contrib.auth import get_user_model

from sampleapp.models import SampleApplication_Db
from development.models import Development_Db
from detection.models import Images_Db

# Create your models here.
class Track_Db(models.Model):
    # densitogram =
    number = models.DecimalField(null=True,decimal_places=0, max_digits=6)


class Evaluation_Db(models.Model):
    tracks = models.ForeignKey(
        Track_Db,
        on_delete=models.CASCADE,
    )
    # pca = 
    # hca =


